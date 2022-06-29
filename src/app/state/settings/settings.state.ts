import { WeatherApiConfig } from 'src/app/config';
import { MeasurementUnitSystem } from 'src/app/constants';

export interface SettingsState {
  measurementUnit: MeasurementUnitSystem;
}

export const initialCoreState: SettingsState = {
  measurementUnit: WeatherApiConfig.defaultUnit,
};
