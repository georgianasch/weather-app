import { MeasurementUnitSystem } from './constants';

export const AppConfig = {};

export const WeatherApiConfig = {
  baseUrl: 'https://api.openweathermap.org/',
  appId: '60fc5039b04416e6b18f73f754eb166f',
  version: '2.5',
  defaultLocation: 'Bucharest',
  defaultUnit: MeasurementUnitSystem.Metric,
  useMockWeatherData: false,
  useMockWeatherForecast: false,
};
