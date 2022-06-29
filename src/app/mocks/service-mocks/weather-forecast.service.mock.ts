import { Observable, of, throwError } from 'rxjs';
import { WeatherForecast } from 'src/app/models/WeatherForecast';
import { WeatherForecastApiResponse } from 'src/app/models/WeatherForecastApiResponse';
import { WeatherForecastApiResponseMock } from '../WeatherForecastApiResponseMock';
import { WeatherForecastListMock } from '../WeatherForecastListMock';

export class WeatherForecastServiceMock {
  getWeatherForecastByLocation(): Observable<WeatherForecastApiResponse> {
    return of(WeatherForecastApiResponseMock);
  }

  mapWeatherForecastResponse(): WeatherForecast[] {
    return WeatherForecastListMock;
  }
}

export class WeatherForecastServiceErrorMock {
  getWeatherForecastByLocation(): Observable<WeatherForecastApiResponse> {
    return throwError(() => new Error());
  }
}
