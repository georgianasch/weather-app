import { MeasurementUnitSystem, Status } from 'src/app/constants';
import { weatherStateMock } from 'src/app/mocks/AppStateMock';
import { WeatherDataMock } from 'src/app/mocks/WeatherDataMock';
import {
  LoadWeatherData,
  LoadWeatherDataSuccess,
  LoadWeatherDataFailure,
  WeatherActionTypes,
} from '../weather.actions';
import { weatherReducer } from '../weather.reducer';
import { WeatherState } from '../weather.state';

describe('LoadWeatherData', () => {
  it('should return state with Loading status', () => {
    const action: LoadWeatherData = {
      type: WeatherActionTypes.LoadWeatherData,
      location: 'London',
      measurementUnit: MeasurementUnitSystem.Imperial,
    };
    const expected: WeatherState = {
      weatherData: WeatherDataMock,
      error: '',
      status: Status.Loading,
    };

    const result = weatherReducer(weatherStateMock, action);

    expect(result).toEqual(expected);
  });
});

describe('LoadWeatherDataSuccess', () => {
  it('should return state with Success status, updated weatherData and no error', () => {
    const newWeatherData = {
      name: 'Paris',
    };
    const action: LoadWeatherDataSuccess = {
      type: WeatherActionTypes.LoadWeatherDataSuccess,
      weatherData: newWeatherData,
    };
    const expected: WeatherState = {
      weatherData: newWeatherData,
      error: '',
      status: Status.Success,
    };

    const result = weatherReducer(weatherStateMock, action);

    expect(result).toEqual(expected);
  });
});

describe('LoadWeatherDataFailure', () => {
  it('should return state with Success status, updated weatherData and no error', () => {
    const errorMessage = 'No city found';
    const action: LoadWeatherDataFailure = {
      type: WeatherActionTypes.LoadWeatherDataFailure,
      error: errorMessage,
    };
    const expected: WeatherState = {
      weatherData: WeatherDataMock,
      error: errorMessage,
      status: Status.Failed,
    };

    const result = weatherReducer(weatherStateMock, action);

    expect(result).toEqual(expected);
  });
});
