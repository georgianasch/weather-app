import { Observable, of, throwError } from 'rxjs';
import { WeatherData } from 'src/app/models/WeatherData';
import { WeatherDataApiResponse } from 'src/app/models/WeatherDataApiResponse';
import { WeatherDataApiResponseMock } from '../WeatherDataApiResponseMock';
import { WeatherDataMock } from '../WeatherDataMock';

export class WeatherServiceMock {
  getWeatherDataByLocation(): Observable<WeatherDataApiResponse> {
    return of(WeatherDataApiResponseMock);
  }

  mapWeatherDataResponse(): WeatherData {
    return WeatherDataMock;
  }
}

export class WeatherServiceErrorMock {
  getWeatherDataByLocation(): Observable<WeatherDataApiResponse> {
    return throwError(() => new Error());
  }
}
