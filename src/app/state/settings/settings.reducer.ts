import { SettingsActions, SettingsActionTypes } from './settings.actions';
import { SettingsState, initialCoreState } from './settings.state';

export const coreFeatureKey = 'core';

export function settingsReducer(
  state: SettingsState | undefined = initialCoreState,
  action: SettingsActions
): SettingsState {
  switch (action.type) {
    case SettingsActionTypes.ChangeWeatherDataMeasurementUnit:
      return {
        ...state,
        measurementUnit: action.unit,
      };

    default:
      return { ...state };
  }
}
