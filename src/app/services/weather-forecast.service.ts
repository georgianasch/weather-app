import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WeatherApiConfig } from 'src/app/config';
import { MeasurementUnitSystem } from 'src/app/constants';
import { WeatherForecast } from 'src/app/models/WeatherForecast';
import {
  WeatherForecastApiResponse,
  WeatherForecastDataApiResponse,
} from 'src/app/models/WeatherForecastApiResponse';
import { ArrayUtils } from 'src/app/utils/array-utils';
import { DateUtils } from 'src/app/utils/date-utils';
import { WeatherUtils } from 'src/app/utils/weather-utils';
import { WeatherForecastApiResponseMock } from '../mocks/WeatherForecastApiResponseMock';

@Injectable({
  providedIn: 'root',
})
export class WeatherForecastService {
  constructor(private http: HttpClient) {}

  /**
   * Gets the weather Forecast by Location, for 5 days every 3 hours, by calling an API
   *
   * @param location - The location to get the weather forecast for e.g. Amsterdam
   * @param measurementUnit - The measurement unit system i.e. Metric or Imperial
   * @returns Observable of the API Response
   *
   */
  getWeatherForecastByLocation(
    location: string,
    measurementUnit: MeasurementUnitSystem
  ): Observable<WeatherForecastApiResponse> {
    return this.http.get<WeatherForecastApiResponse>(
      `${WeatherApiConfig.baseUrl}/data/${WeatherApiConfig.version}/forecast?q=${location}&units=${measurementUnit}&appid=${WeatherApiConfig.appId}`
    );
  }

  /**
   * Maps the Weather forecast API Response to an object by only taking the needed properties and converting them to the needed formats
   *
   * @param weatherForecastResponse - The API response
   * @returns A WeatherForecast object
   *
   */
  mapWeatherForecastResponse(
    weatherForecastResponse: WeatherForecastApiResponse
  ): WeatherForecast[] {
    const weatherDataObject = this.groupWeatherForecastByDate(
      weatherForecastResponse
    );
    // make an average for each day to summarize the forecast
    return Object.keys(weatherDataObject).map((date: string) => {
      return {
        date: date,
        description: ArrayUtils.mode(weatherDataObject[date].descriptions),
        minTemperature: Math.min(...weatherDataObject[date].minTemperatures),
        maxTemperature: Math.max(...weatherDataObject[date].maxTemperatures),
        iconUrl: WeatherUtils.getWeatherDataIconUrl(
          ArrayUtils.mode(weatherDataObject[date].icons)
        ),
      };
    });
  }

  /**
   * Groups the weather forecast data by Date and for each date there will be an array for every needed information e.g. description, min temperature, max temperature, icon
   *
   * @param weatherForecastResponse - The API response
   * @returns A key-value object
   *
   */
  groupWeatherForecastByDate(
    weatherForecastResponse: WeatherForecastApiResponse
  ) {
    return weatherForecastResponse.list.reduce(
      (
        result: {
          [date: string]: {
            descriptions: string[];
            minTemperatures: number[];
            maxTemperatures: number[];
            icons: string[];
          };
        },
        weatherForecastData: WeatherForecastDataApiResponse
      ) => {
        const date = DateUtils.convertTicksToDateString(weatherForecastData.dt);
        result[date] = result[date] || [];

        (result[date].descriptions = result[date].descriptions || []).push(
          weatherForecastData.weather[0].description
        );
        (result[date].minTemperatures =
          result[date].minTemperatures || []).push(
          weatherForecastData.main.temp_min
        );
        (result[date].maxTemperatures =
          result[date].maxTemperatures || []).push(
          weatherForecastData.main.temp_max
        );
        (result[date].icons = result[date].icons || []).push(
          weatherForecastData.weather[0].icon
        );
        return result;
      },
      {}
    );
  }

  /**
   * Gets a mock weather forecast response
   *
   * @returns A mock weather forecast response
   *
   */
  getWeatherForecastResponseMock(): Observable<WeatherForecastApiResponse> {
    return of(WeatherForecastApiResponseMock);
  }
}
