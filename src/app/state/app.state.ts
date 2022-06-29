import { ActionReducerMap } from '@ngrx/store';
import { settingsReducer } from './settings/settings.reducer';
import { SettingsState } from './settings/settings.state';
import { weatherForecastReducer } from './forecast/weather-forecast.reducer';
import { WeatherForecastState } from './forecast/weather-forecast.state';
import { weatherReducer } from './weather/weather.reducer';
import { WeatherState } from './weather/weather.state';
import { SettingsEffects } from './settings/settings.effects';
import { WeatherDataEffects } from './weather/weather.effects';
import { WeatherForecastEffects } from './forecast/weather-forecast.effects';

export interface AppState {
  settings: SettingsState;
  weather: WeatherState;
  weatherForecast: WeatherForecastState;
}

export const appReducers: ActionReducerMap<AppState> = {
  settings: settingsReducer,
  weather: weatherReducer,
  weatherForecast: weatherForecastReducer,
};

export const appEffects = [
  SettingsEffects,
  WeatherDataEffects,
  WeatherForecastEffects,
];
