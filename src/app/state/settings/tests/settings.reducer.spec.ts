import { MeasurementUnitSystem } from 'src/app/constants';
import { settingsStateMock } from 'src/app/mocks/AppStateMock';
import {
  ChangeWeatherDataMeasurementUnit,
  SettingsActionTypes,
} from '../settings.actions';
import { settingsReducer } from '../settings.reducer';
import { SettingsState } from '../settings.state';

describe('ChangeWeatherDataMeasurementUnit', () => {
  it('should return state with updated measurement unit', () => {
    const action: ChangeWeatherDataMeasurementUnit = {
      type: SettingsActionTypes.ChangeWeatherDataMeasurementUnit,
      location: 'Amsterdam',
      unit: MeasurementUnitSystem.Imperial,
    };
    const expected: SettingsState = {
      measurementUnit: MeasurementUnitSystem.Imperial,
    };

    const result = settingsReducer(settingsStateMock, action);

    expect(result).toEqual(expected);
  });
});
