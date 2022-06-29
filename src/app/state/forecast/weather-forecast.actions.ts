import { Action } from '@ngrx/store';
import { MeasurementUnitSystem } from 'src/app/constants';
import { WeatherForecast } from 'src/app/models/WeatherForecast';

export enum WeatherForecastActionTypes {
  LoadWeatherForecast = '[Weather Forecast] Load Weather Forecast',
  LoadWeatherForecastSuccess = '[Weather Forecast] Load Weather Forecast Success',
  LoadWeatherForecastFailure = '[Weather Forecast] Load Weather Forecast Failure',
}

export class LoadWeatherForecast implements Action {
  readonly type = WeatherForecastActionTypes.LoadWeatherForecast;
  constructor(
    public location: string,
    public measurementUnit: MeasurementUnitSystem
  ) {}
}

export class LoadWeatherForecastSuccess implements Action {
  readonly type = WeatherForecastActionTypes.LoadWeatherForecastSuccess;
  constructor(public weatherForecast: WeatherForecast[]) {}
}

export class LoadWeatherForecastFailure implements Action {
  readonly type = WeatherForecastActionTypes.LoadWeatherForecastFailure;
  constructor(public error: string) {}
}

export type WeatherForecastActions =
  | LoadWeatherForecast
  | LoadWeatherForecastSuccess
  | LoadWeatherForecastFailure;
