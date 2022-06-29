import { Action } from '@ngrx/store';
import { MeasurementUnitSystem } from 'src/app/constants';
import { WeatherData } from 'src/app/models/WeatherData';

export enum WeatherActionTypes {
  LoadWeatherData = '[Weather] Load Weather Data',
  LoadWeatherDataSuccess = '[Weather] Load Weather Data Success',
  LoadWeatherDataFailure = '[Weather] Load Weather Data Failure',
}

export class LoadWeatherData implements Action {
  readonly type = WeatherActionTypes.LoadWeatherData;
  constructor(
    public location: string,
    public measurementUnit: MeasurementUnitSystem
  ) {}
}

export class LoadWeatherDataSuccess implements Action {
  readonly type = WeatherActionTypes.LoadWeatherDataSuccess;
  constructor(public weatherData: WeatherData) {}
}

export class LoadWeatherDataFailure implements Action {
  readonly type = WeatherActionTypes.LoadWeatherDataFailure;
  constructor(public error: string) {}
}

export type WeatherActions =
  | LoadWeatherData
  | LoadWeatherDataSuccess
  | LoadWeatherDataFailure;
