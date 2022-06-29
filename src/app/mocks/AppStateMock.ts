import { MeasurementUnitSystem, Status } from '../constants';
import { AppState } from '../state/app.state';
import { WeatherForecastState } from '../state/forecast/weather-forecast.state';
import { SettingsState } from '../state/settings/settings.state';
import { WeatherState } from '../state/weather/weather.state';
import { WeatherDataMock } from './WeatherDataMock';
import { WeatherForecastListMock } from './WeatherForecastListMock';

export const settingsStateMock: SettingsState = {
  measurementUnit: MeasurementUnitSystem.Metric,
};

export const weatherStateMock: WeatherState = {
  weatherData: WeatherDataMock,
  error: '',
  status: Status.Pending,
};

export const weatherForecastStateMock: WeatherForecastState = {
  weatherForecast: WeatherForecastListMock,
  error: '',
  status: Status.Pending,
};

export const appStateMock: AppState = {
  settings: settingsStateMock,
  weather: weatherStateMock,
  weatherForecast: weatherForecastStateMock,
};
