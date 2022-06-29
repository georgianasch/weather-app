import { TestBed } from '@angular/core/testing';
import { WeatherDataApiResponseMock } from 'src/app/mocks/WeatherDataApiResponseMock';
import { WeatherData } from 'src/app/models/WeatherData';
import { WeatherService } from '../weather.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should corectly map the weather data response', () => {
    const expected: WeatherData = {
      name: 'Bucharest',
      countryCode: 'RO',
      timezone: 10800,
      mainDescription: 'Clear',
      description: 'clear sky',
      iconUrl: 'https://api.openweathermap.org/img/w/01d.png',
      temperature: 27.77,
      feelsLike: 27.6,
      minTemperature: 17.7,
      maxTemperature: 28.05,
      pressure: 1008,
      humidity: 42,
      visibility: 10000,
      windSpeed: 2.68,
      sunrise: '5:32',
      sunset: '21:4',
      lastUpdatedAt: new Date(
        'Sat Jun 25 2022 13:01:32 GMT+0300 (Eastern European Summer Time'
      ),
    };
    const weatherData = service.mapWeatherDataResponse(
      WeatherDataApiResponseMock
    );

    expect(weatherData).toEqual(expected);
  });
});
