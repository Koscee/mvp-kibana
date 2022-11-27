/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/* eslint-disable max-classes-per-file */

import { EuiFlyout } from '@elastic/eui';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Subject } from 'rxjs';
import type { ThemeServiceStart } from '@kbn/core-theme-browser';
import type { I18nStart } from '@kbn/core-i18n-browser';
import { CoreContextProvider } from '@kbn/core-theme-browser-internal';
import type { MountPoint, OverlayRef } from '@kbn/core-mount-utils-browser';
import { MountWrapper } from '@kbn/core-mount-utils-browser-internal';
import type { OverlayFlyoutOpenOptions, OverlayFlyoutStart } from '@kbn/core-overlays-browser';

/**
 * A FlyoutRef is a reference to an opened flyout panel. It offers methods to
 * close the flyout panel again. If you open a flyout panel you should make
 * sure you call `close()` when it should be closed.
 * Since a flyout could also be closed by a user or from another flyout being
 * opened, you must bind to the `onClose` Promise on the FlyoutRef instance.
 * The Promise will resolve whenever the flyout was closed at which point you
 * should discard the FlyoutRef.
 *
 * @public
 */
class FlyoutRef implements OverlayRef {
  /**
   * An Promise that will resolve once this flyout is closed.
   *
   * Flyouts can close from user interaction, calling `close()` on the flyout
   * reference or another call to `openFlyout()` replacing your flyout.
   */
  public readonly onClose: Promise<void>;

  private closeSubject = new Subject<void>();

  constructor() {
    this.onClose = this.closeSubject.toPromise();
  }

  /**
   * Closes the referenced flyout if it's still open which in turn will
   * resolve the `onClose` Promise. If the flyout had already been
   * closed this method does nothing.
   */
  public close(): Promise<void> {
    if (!this.closeSubject.closed) {
      this.closeSubject.next();
      this.closeSubject.complete();
    }
    return this.onClose;
  }
}

interface StartDeps {
  i18n: I18nStart;
  theme: ThemeServiceStart;
  targetDomElement: Element;
}

/** @internal */
export class FlyoutService {
  private activeFlyout: FlyoutRef | null = null;
  private targetDomElement: Element | null = null;

  public start({ i18n, theme, targetDomElement }: StartDeps): OverlayFlyoutStart {
    this.targetDomElement = targetDomElement;

    return {
      open: (mount: MountPoint, options: OverlayFlyoutOpenOptions = {}): OverlayRef => {
        // If there is an active flyout session close it before opening a new one.
        if (this.activeFlyout) {
          this.activeFlyout.close();
          this.cleanupDom();
        }

        const flyout = new FlyoutRef();

        // If a flyout gets closed through it's FlyoutRef, remove it from the dom
        flyout.onClose.then(() => {
          if (this.activeFlyout === flyout) {
            this.cleanupDom();
          }
        });

        this.activeFlyout = flyout;

        const onCloseFlyout = () => {
          if (options.onClose) {
            options.onClose(flyout);
          } else {
            flyout.close();
          }
        };

        render(
          <CoreContextProvider i18n={i18n} theme={theme}>
            <EuiFlyout {...options} onClose={onCloseFlyout}>
              <MountWrapper mount={mount} className="kbnOverlayMountWrapper" />
            </EuiFlyout>
          </CoreContextProvider>,
          this.targetDomElement
        );

        return flyout;
      },
    };
  }

  /**
   * Using React.Render to re-render into a target DOM element will replace
   * the content of the target but won't call unmountComponent on any
   * components inside the target or any of their children. So we properly
   * cleanup the DOM here to prevent subtle bugs in child components which
   * depend on unmounting for cleanup behaviour.
   */
  private cleanupDom(): void {
    if (this.targetDomElement != null) {
      unmountComponentAtNode(this.targetDomElement);
      this.targetDomElement.innerHTML = '';
    }
    this.activeFlyout = null;
  }
}
