import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { WeatherApiConfig } from 'src/app/config';
import { MeasurementUnitSystem } from 'src/app/constants';
import { WeatherData } from 'src/app/models/WeatherData';
import { WeatherDataApiResponse } from 'src/app/models/WeatherDataApiResponse';
import { DateUtils } from 'src/app/utils/date-utils';
import { WeatherUtils } from 'src/app/utils/weather-utils';
import { WeatherDataApiResponseMock } from '../mocks/WeatherDataApiResponseMock';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  /**
   * Gets the weather data by Location by calling an API
   *
   * @param location - The location to get the weather data for e.g. Amsterdam
   * @param measurementUnit - The measurement unit system i.e. Metric or Imperial
   * @returns Observable of the API Response
   *
   */
  getWeatherDataByLocation(
    location: string,
    measurementUnit: MeasurementUnitSystem
  ): Observable<WeatherDataApiResponse> {
    return this.http.get<WeatherDataApiResponse>(
      `${WeatherApiConfig.baseUrl}data/${WeatherApiConfig.version}/weather?q=${location}&units=${measurementUnit}&appid=${WeatherApiConfig.appId}`
    );
  }

  /**
   * Maps the Weather data API Response to an object by only taking the needed properties and converting them to the needed formats
   *
   * @param weatherForecastResponse - The API response
   * @returns A WeatherData object
   *
   */
  mapWeatherDataResponse(
    weatherDataResponse: WeatherDataApiResponse
  ): WeatherData {
    return {
      name: weatherDataResponse.name,
      countryCode: weatherDataResponse.sys.country,
      timezone: weatherDataResponse.timezone,
      mainDescription: weatherDataResponse.weather[0].main,
      description: weatherDataResponse.weather[0].description,
      iconUrl: WeatherUtils.getWeatherDataIconUrl(
        weatherDataResponse.weather[0].icon
      ),
      temperature: weatherDataResponse.main.temp,
      feelsLike: weatherDataResponse.main.feels_like,
      minTemperature: weatherDataResponse.main.temp_min,
      maxTemperature: weatherDataResponse.main.temp_max,
      pressure: weatherDataResponse.main.pressure,
      humidity: weatherDataResponse.main.humidity,
      visibility: weatherDataResponse.visibility,
      windSpeed: weatherDataResponse.wind.speed,
      sunrise: DateUtils.convertTicksToTimeString(
        weatherDataResponse.sys.sunrise
      ),
      sunset: DateUtils.convertTicksToTimeString(
        weatherDataResponse.sys.sunset
      ),
      lastUpdatedAt: DateUtils.convertTicksToDate(weatherDataResponse.dt),
    };
  }

  /**
   * Gets a mock weather data response
   *
   * @returns A mock weather data response
   *
   */
  getWeatherDataResponseMock(): Observable<WeatherDataApiResponse> {
    return of(WeatherDataApiResponseMock);
  }
}
