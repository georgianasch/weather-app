import { MeasurementUnitSystem, Status } from 'src/app/constants';
import { weatherForecastStateMock } from 'src/app/mocks/AppStateMock';
import { WeatherForecastListMock } from 'src/app/mocks/WeatherForecastListMock';
import {
  LoadWeatherForecast,
  WeatherForecastActionTypes,
  LoadWeatherForecastSuccess,
  LoadWeatherForecastFailure,
} from '../weather-forecast.actions';
import { weatherForecastReducer } from '../weather-forecast.reducer';
import { WeatherForecastState } from '../weather-forecast.state';

describe('LoadWeatherForecast', () => {
  it('should return state with Loading status', () => {
    const action: LoadWeatherForecast = {
      type: WeatherForecastActionTypes.LoadWeatherForecast,
      location: 'London',
      measurementUnit: MeasurementUnitSystem.Imperial,
    };
    const expected: WeatherForecastState = {
      weatherForecast: WeatherForecastListMock,
      error: '',
      status: Status.Loading,
    };

    const result = weatherForecastReducer(weatherForecastStateMock, action);

    expect(result).toEqual(expected);
  });
});

describe('LoadWeatherForecastSuccess', () => {
  it('should return state with Success status, updated weatherForecast and no error', () => {
    const newWeatherForecastList = [
      {
        date: '2022-06-26',
        description: 'broken clouds',
        minTemperature: 19.56,
        maxTemperature: 22.5,
        iconUrl: 'https://api.openweathermap.org/img/w/04n.png',
      },
    ];
    const action: LoadWeatherForecastSuccess = {
      type: WeatherForecastActionTypes.LoadWeatherForecastSuccess,
      weatherForecast: newWeatherForecastList,
    };
    const expected: WeatherForecastState = {
      weatherForecast: newWeatherForecastList,
      error: '',
      status: Status.Success,
    };

    const result = weatherForecastReducer(weatherForecastStateMock, action);

    expect(result).toEqual(expected);
  });
});

describe('LoadWeatherForecastFailure', () => {
  it('should return state with Success status, updated weatherForecast and no error', () => {
    const errorMessage = 'No city found';
    const action: LoadWeatherForecastFailure = {
      type: WeatherForecastActionTypes.LoadWeatherForecastFailure,
      error: errorMessage,
    };
    const expected: WeatherForecastState = {
      weatherForecast: WeatherForecastListMock,
      error: errorMessage,
      status: Status.Failed,
    };

    const result = weatherForecastReducer(weatherForecastStateMock, action);

    expect(result).toEqual(expected);
  });
});
