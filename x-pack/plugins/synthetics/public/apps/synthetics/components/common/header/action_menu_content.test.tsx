/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React from 'react';
import { render } from '../../../utils/testing/rtl_helpers';
import { ActionMenuContent } from './action_menu_content';

describe('ActionMenuContent', () => {
  it('renders settings link', () => {
    const { getByRole, getByText } = render(<ActionMenuContent />);

    const settingsAnchor = getByRole('link', { name: 'Navigate to the Uptime settings page' });
    expect(settingsAnchor.getAttribute('href')).toBe('/settings');
    expect(getByText('Settings'));
  });

  it('renders exploratory view link', () => {
    const { getByLabelText, getByText } = render(<ActionMenuContent />);

    const analyzeAnchor = getByLabelText(
      'Navigate to the "Explore Data" view to visualize Synthetics/User data'
    );

    expect(analyzeAnchor.getAttribute('href')).toContain('/app/observability/exploratory-view');
    expect(getByText('Explore data'));
  });

  it('renders Add Data link', () => {
    const { getByLabelText, getByText } = render(<ActionMenuContent />);

    const addDataAnchor = getByLabelText('Navigate to a tutorial about adding Uptime data');

    // this href value is mocked, so it doesn't correspond to the real link
    // that Kibana core services will provide
    expect(addDataAnchor.getAttribute('href')).toBe('/home#/tutorial/uptimeMonitors');
    expect(getByText('Add data'));
  });
});
