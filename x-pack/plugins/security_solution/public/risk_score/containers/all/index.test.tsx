/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
import { renderHook } from '@testing-library/react-hooks';
import { useHostRiskScore, useUserRiskScore } from '.';
import { TestProviders } from '../../../common/mock';

import { useSearchStrategy } from '../../../common/containers/use_search_strategy';
import { useIsExperimentalFeatureEnabled } from '../../../common/hooks/use_experimental_features';
import { useAppToasts } from '../../../common/hooks/use_app_toasts';
import { useAppToastsMock } from '../../../common/hooks/use_app_toasts.mock';

jest.mock('../../../common/containers/use_search_strategy', () => ({
  useSearchStrategy: jest.fn(),
}));

jest.mock('../../../common/hooks/use_space_id', () => ({
  useSpaceId: jest.fn().mockReturnValue('default'),
}));

jest.mock('../../../common/hooks/use_experimental_features', () => ({
  useIsExperimentalFeatureEnabled: jest.fn(),
}));

jest.mock('../../../common/hooks/use_app_toasts');

const mockUseSearchStrategy = useSearchStrategy as jest.Mock;
const mockUseIsExperimentalFeatureEnabled = useIsExperimentalFeatureEnabled as jest.Mock;
const mockSearch = jest.fn();
const mockRefetch = jest.fn();

let appToastsMock: jest.Mocked<ReturnType<typeof useAppToastsMock.create>>;

[useHostRiskScore, useUserRiskScore].forEach((fn) => {
  const riskEntity = fn.name === 'useHostRiskScore' ? 'host' : 'user';
  describe(`${fn.name}`, () => {
    beforeEach(() => {
      jest.clearAllMocks();
      appToastsMock = useAppToastsMock.create();
      (useAppToasts as jest.Mock).mockReturnValue(appToastsMock);
    });
    test('does not search if feature is not enabled', () => {
      mockUseIsExperimentalFeatureEnabled.mockReturnValue(false);
      mockUseSearchStrategy.mockReturnValue({
        loading: false,
        result: {
          data: undefined,
          totalCount: 0,
        },
        search: mockSearch,
        refetch: mockRefetch,
        inspect: {},
        error: undefined,
      });
      const { result } = renderHook(() => fn(), {
        wrapper: TestProviders,
      });
      expect(mockSearch).not.toHaveBeenCalled();
      expect(result.current).toEqual([
        false,
        {
          data: undefined,
          inspect: {},
          isInspected: false,
          isModuleEnabled: false,
          refetch: mockRefetch,
          totalCount: 0,
        },
      ]);
    });

    test('if query skipped and feature is enabled, isModuleEnabled should be true', () => {
      mockUseIsExperimentalFeatureEnabled.mockReturnValue(true);
      mockUseSearchStrategy.mockReturnValue({
        loading: false,
        result: {
          data: undefined,
          totalCount: 0,
        },
        search: mockSearch,
        refetch: mockRefetch,
        inspect: {},
        error: undefined,
      });
      const { result } = renderHook(() => fn({ skip: true }), {
        wrapper: TestProviders,
      });
      expect(result.current).toEqual([
        false,
        {
          data: undefined,
          inspect: {},
          isInspected: false,
          isModuleEnabled: true,
          refetch: mockRefetch,
          totalCount: 0,
        },
      ]);
    });

    test('handle index not found error', () => {
      mockUseIsExperimentalFeatureEnabled.mockReturnValue(true);

      mockUseSearchStrategy.mockReturnValue({
        loading: false,
        result: {
          data: undefined,
          totalCount: 0,
        },
        search: mockSearch,
        refetch: mockRefetch,
        inspect: {},
        error: {
          attributes: {
            caused_by: {
              type: 'index_not_found_exception',
            },
          },
        },
      });
      const { result } = renderHook(() => fn(), {
        wrapper: TestProviders,
      });
      expect(result.current).toEqual([
        false,
        {
          data: undefined,
          inspect: {},
          isInspected: false,
          isModuleEnabled: false,
          refetch: mockRefetch,
          totalCount: 0,
        },
      ]);
    });

    test('show error toast', () => {
      mockUseIsExperimentalFeatureEnabled.mockReturnValue(true);

      const error = new Error();
      mockUseSearchStrategy.mockReturnValue({
        loading: false,
        result: {
          data: undefined,
          totalCount: 0,
        },
        search: mockSearch,
        refetch: mockRefetch,
        inspect: {},
        error,
      });
      renderHook(() => fn(), {
        wrapper: TestProviders,
      });
      expect(appToastsMock.addError).toHaveBeenCalledWith(error, {
        title: 'Failed to run search on risk score',
      });
    });

    test('runs search if feature is enabled', () => {
      mockUseIsExperimentalFeatureEnabled.mockReturnValue(true);
      mockUseSearchStrategy.mockReturnValue({
        loading: false,
        result: {
          data: [],
          totalCount: 0,
        },
        search: mockSearch,
        refetch: mockRefetch,
        inspect: {},
        error: undefined,
      });
      renderHook(() => fn(), {
        wrapper: TestProviders,
      });
      expect(mockSearch).toHaveBeenCalledWith({
        defaultIndex: [`ml_${riskEntity}_risk_score_latest_default`],
        factoryQueryType: `${riskEntity}sRiskScore`,
        filterQuery: undefined,
        pagination: undefined,
        timerange: undefined,
        sort: undefined,
      });
    });

    test('return result', async () => {
      mockUseIsExperimentalFeatureEnabled.mockReturnValue(true);
      mockUseSearchStrategy.mockReturnValue({
        loading: false,
        result: {
          data: [],
          totalCount: 0,
        },
        search: mockSearch,
        refetch: mockRefetch,
        inspect: {},
        error: undefined,
      });
      const { result, waitFor } = renderHook(() => fn(), {
        wrapper: TestProviders,
      });
      await waitFor(() => {
        expect(result.current).toEqual([
          false,
          {
            data: [],
            inspect: {},
            isInspected: false,
            isModuleEnabled: true,
            refetch: mockRefetch,
            totalCount: 0,
          },
        ]);
      });
    });
  });
});
