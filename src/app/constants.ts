import { ButtonToggleOption } from '../app/controls/button-toggle/button-toggle.component';

export enum Status {
  Pending,
  Loading,
  Failed,
  Success,
}

export enum SortType {
  Ascending = 'asc',
  Descending = 'desc',
}

export enum MeasurementUnitSystem {
  Metric = 'Metric',
  Imperial = 'Imperial',
}

export const MeasurementUnits = {
  [MeasurementUnitSystem.Metric]: {
    temperature: '°C',
    windSpeed: 'm/s',
    pressure: 'mmHg',
  },
  [MeasurementUnitSystem.Imperial]: {
    temperature: '°F',
    windSpeed: 'mil/h',
    pressure: 'hPa',
  },
};

export const buttonToggleOptions: ButtonToggleOption[] = [
  {
    value: MeasurementUnitSystem.Metric,
    label: MeasurementUnits[MeasurementUnitSystem.Metric].temperature,
  },
  {
    value: MeasurementUnitSystem.Imperial,
    label: MeasurementUnits[MeasurementUnitSystem.Imperial].temperature,
  },
];
