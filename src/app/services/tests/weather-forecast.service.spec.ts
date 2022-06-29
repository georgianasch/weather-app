import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { WeatherForecastApiResponseMock } from 'src/app/mocks/WeatherForecastApiResponseMock';
import { WeatherForecast } from 'src/app/models/WeatherForecast';
import { WeatherForecastService } from '../weather-forecast.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherForecastListMock } from 'src/app/mocks/WeatherForecastListMock';

describe('WeatherForecastService', () => {
  let service: WeatherForecastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideMockStore({})],
    });
    service = TestBed.inject(WeatherForecastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should corectly map the weather forecast response', () => {
    const expected: WeatherForecast[] = WeatherForecastListMock;
    const weatherData = service.mapWeatherForecastResponse(
      WeatherForecastApiResponseMock
    );

    expect(weatherData).toEqual(expected);
  });
});
