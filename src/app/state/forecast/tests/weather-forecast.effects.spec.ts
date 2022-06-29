import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { weatherForecastStateMock } from 'src/app/mocks/AppStateMock';
import {
  WeatherForecastServiceErrorMock,
  WeatherForecastServiceMock,
} from 'src/app/mocks/service-mocks/weather-forecast.service.mock';
import { WeatherForecastListMock } from 'src/app/mocks/WeatherForecastListMock';
import {
  LoadWeatherForecastFailure,
  LoadWeatherForecastSuccess,
  WeatherForecastActionTypes,
} from 'src/app/state/forecast/weather-forecast.actions';
import { WeatherForecastEffects } from 'src/app/state/forecast/weather-forecast.effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { WeatherForecastService } from 'src/app/services/weather-forecast.service';
import { Action } from '@ngrx/store';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';

describe('WeatherForecastEffects', () => {
  let actions$: Observable<Action>;
  let effects: WeatherForecastEffects;
  let weatherForecastService: WeatherForecastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WeatherForecastEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState: { ...weatherForecastStateMock } }),
        {
          provide: WeatherForecastService,
          useClass: WeatherForecastServiceMock,
        },
      ],
    });
    effects = TestBed.inject(WeatherForecastEffects);
    weatherForecastService = TestBed.inject(WeatherForecastService);
  });

  describe('loadWeatherForecast$', () => {
    it('should call "getWeatherForecastByLocation" from "weatherForecastService" and fire "LoadWeatherForecastSuccess" if "getWeatherForecastByLocation" does not return errors', () => {
      const weatherForecastServiceSpy = spyOn(
        weatherForecastService,
        'getWeatherForecastByLocation'
      ).and.callThrough();

      actions$ = of({ type: WeatherForecastActionTypes.LoadWeatherForecast });

      effects.loadWeatherForecast$.subscribe((result) => {
        expect(result).toEqual(
          new LoadWeatherForecastSuccess(WeatherForecastListMock)
        );
        expect(weatherForecastServiceSpy).toHaveBeenCalledTimes(1);
      });
    });
  });
});

describe('WeatherForecastEffects with errors', () => {
  let actions$: Observable<Action>;
  let effects: WeatherForecastEffects;
  let weatherForecastService: WeatherForecastService;
  let errorHandlerService: ErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WeatherForecastEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState: { ...weatherForecastStateMock } }),
        {
          provide: WeatherForecastService,
          useClass: WeatherForecastServiceErrorMock,
        },
        {
          provide: ErrorHandlerService,
          useClass: ErrorHandlerService,
        },
      ],
    });
    effects = TestBed.inject(WeatherForecastEffects);
    weatherForecastService = TestBed.inject(WeatherForecastService);
    errorHandlerService = TestBed.inject(ErrorHandlerService);
  });

  describe('loadWeatherForecast$ with errors', () => {
    it('should call "getWeatherForecastByLocation" and "handleHttpError" and fire "LoadWeatherForecastFailure" if "getWeatherForecastByLocation" returns errors', () => {
      const errorHandlerServiceSpy = spyOn(
        errorHandlerService,
        'handleHttpError'
      ).and.callThrough();

      const weatherForecastServiceSpy = spyOn(
        weatherForecastService,
        'getWeatherForecastByLocation'
      ).and.callThrough();

      actions$ = of({ type: WeatherForecastActionTypes.LoadWeatherForecast });

      effects.loadWeatherForecast$.subscribe((result) => {
        expect(result).toEqual(
          new LoadWeatherForecastFailure(
            'An error occured. Please contact support.'
          )
        );
        expect(errorHandlerServiceSpy).toHaveBeenCalledTimes(1);
        expect(weatherForecastServiceSpy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
