import { Status } from 'src/app/constants';
import { WeatherActions, WeatherActionTypes } from './weather.actions';
import { initialWeatherState, WeatherState } from './weather.state';

export const weatherFeatureKey = 'weather';

export function weatherReducer(
  state: WeatherState = initialWeatherState,
  action: WeatherActions
): WeatherState {
  switch (action.type) {
    case WeatherActionTypes.LoadWeatherData:
      return {
        ...state,
        status: Status.Loading,
      };

    case WeatherActionTypes.LoadWeatherDataSuccess:
      return {
        ...state,
        weatherData: action.weatherData,
        status: Status.Success,
        error: '',
      };

    case WeatherActionTypes.LoadWeatherDataFailure:
      return {
        ...state,
        error: action.error,
        status: Status.Failed,
      };

    default:
      return { ...state };
  }
}
