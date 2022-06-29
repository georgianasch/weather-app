import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectWeatherForecastState = (state: AppState) =>
  state.weatherForecast;

export const selectWeatherForecast = createSelector(
  selectWeatherForecastState,
  (state) => state?.weatherForecast
);

export const selectWeatherForecastStatus = createSelector(
  selectWeatherForecastState,
  (state) => state?.status
);

export const selectWeatherForecastError = createSelector(
  selectWeatherForecastState,
  (state) => state?.error
);
