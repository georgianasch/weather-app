import { Status } from 'src/app/constants';
import { WeatherData } from 'src/app/models/WeatherData';

export interface WeatherState {
  weatherData: WeatherData;
  error: string;
  status: Status;
}

export const initialWeatherState: WeatherState = {
  weatherData: {},
  error: '',
  status: Status.Pending,
};
