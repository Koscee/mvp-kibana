/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { Fragment } from 'react';

import { EuiFormRow, EuiSelect } from '@elastic/eui';

import { FormattedMessage } from '@kbn/i18n-react';
import { GeoPointFormat } from '@kbn/field-formats-plugin/common';
import { DefaultFormatEditor, defaultState } from '../default/default';

import { FormatEditorSamples } from '../../samples';
import { formatId } from './constants';

export interface GeoPointFormatEditorFormatParams {
  transform: string;
}

export class GeoPointFormatEditor extends DefaultFormatEditor<GeoPointFormatEditorFormatParams> {
  static formatId = formatId;
  state = {
    ...defaultState,
    sampleInputs: [
      {
        coordinates: [125.6, 10.1],
        type: 'Point',
      },
    ],
  };

  render() {
    const { formatParams, format } = this.props;
    const { error, samples } = this.state;

    return (
      <Fragment>
        <EuiFormRow
          label={
            <FormattedMessage
              id="indexPatternFieldEditor.geoPoint.transformLabel"
              defaultMessage="Transform"
            />
          }
          isInvalid={!!error}
          error={error}
        >
          <EuiSelect
            data-test-subj="geoPointEditorTransform"
            defaultValue={formatParams.transform}
            options={((format.type as typeof GeoPointFormat).transformOptions || []).map(
              (option) => {
                return {
                  value: option.kind as string,
                  text: option.text,
                };
              }
            )}
            onChange={(e) => {
              this.onChange({ transform: e.target.value });
            }}
            isInvalid={!!error}
          />
        </EuiFormRow>
        <FormatEditorSamples samples={samples} />
      </Fragment>
    );
  }
}
