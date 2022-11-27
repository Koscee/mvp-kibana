/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React from 'react';
import { Observable } from 'rxjs';
import useObservable from 'react-use/lib/useObservable';
import classNames from 'classnames';
import { APP_WRAPPER_CLASS } from '@kbn/core-application-common';

export const AppWrapper: React.FunctionComponent<{
  chromeVisible$: Observable<boolean>;
}> = ({ chromeVisible$, children }) => {
  const visible = useObservable(chromeVisible$);
  return (
    <div className={classNames(APP_WRAPPER_CLASS, { 'kbnAppWrapper--hiddenChrome': !visible })}>
      {children}
    </div>
  );
};
