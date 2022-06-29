import { Status } from 'src/app/constants';
import {
  WeatherForecastActions,
  WeatherForecastActionTypes,
} from './weather-forecast.actions';
import {
  initialWeatherForecastState,
  WeatherForecastState,
} from './weather-forecast.state';

export const forecastFeatureKey = 'forecast';

export function weatherForecastReducer(
  state: WeatherForecastState = initialWeatherForecastState,
  action: WeatherForecastActions
): WeatherForecastState {
  switch (action.type) {
    case WeatherForecastActionTypes.LoadWeatherForecast:
      return {
        ...state,
        status: Status.Loading,
      };

    case WeatherForecastActionTypes.LoadWeatherForecastSuccess:
      return {
        ...state,
        weatherForecast: action.weatherForecast,
        status: Status.Success,
        error: '',
      };

    case WeatherForecastActionTypes.LoadWeatherForecastFailure:
      return {
        ...state,
        error: action.error,
        status: Status.Failed,
      };

    default:
      return { ...state };
  }
}
