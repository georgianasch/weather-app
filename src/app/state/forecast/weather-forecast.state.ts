import { Status } from 'src/app/constants';
import { WeatherForecast } from 'src/app/models/WeatherForecast';

export interface WeatherForecastState {
  weatherForecast: WeatherForecast[];
  error: string;
  status: Status;
}

export const initialWeatherForecastState: WeatherForecastState = {
  weatherForecast: [],
  error: '',
  status: Status.Pending,
};
