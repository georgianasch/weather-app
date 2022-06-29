import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectSettingsState = (state: AppState) => state.settings;

export const selectWeatherMeasurementUnit = createSelector(
  selectSettingsState,
  (state) => state?.measurementUnit
);
