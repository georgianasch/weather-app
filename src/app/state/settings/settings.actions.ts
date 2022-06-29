import { Action } from '@ngrx/store';
import { MeasurementUnitSystem } from 'src/app/constants';

export enum SettingsActionTypes {
  ChangeWeatherDataMeasurementUnit = '[Core] Change Weather Data Measurement Unit',
}

export class ChangeWeatherDataMeasurementUnit implements Action {
  readonly type = SettingsActionTypes.ChangeWeatherDataMeasurementUnit;
  constructor(public unit: MeasurementUnitSystem, public location: string) {}
}

export type SettingsActions = ChangeWeatherDataMeasurementUnit;
