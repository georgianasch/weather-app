import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectWeatherState = (state: AppState) => state.weather;

export const selectWeatherData = createSelector(
  selectWeatherState,
  (state) => state?.weatherData
);

export const selectWeatherStatus = createSelector(
  selectWeatherState,
  (state) => state?.status
);

export const selectWeatherError = createSelector(
  selectWeatherState,
  (state) => state?.error
);
