import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { weatherStateMock } from 'src/app/mocks/AppStateMock';
import { Action } from '@ngrx/store';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { WeatherDataEffects } from '../weather.effects';
import { WeatherService } from 'src/app/services/weather.service';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  WeatherServiceErrorMock,
  WeatherServiceMock,
} from 'src/app/mocks/service-mocks/weather.service.mock';
import {
  LoadWeatherDataFailure,
  LoadWeatherDataSuccess,
  WeatherActionTypes,
} from '../weather.actions';
import { WeatherDataMock } from 'src/app/mocks/WeatherDataMock';

describe('WeatherEffects', () => {
  let actions$: Observable<Action>;
  let effects: WeatherDataEffects;
  let weatherService: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WeatherDataEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState: { ...weatherStateMock } }),
        {
          provide: WeatherService,
          useClass: WeatherServiceMock,
        },
      ],
    });
    effects = TestBed.inject(WeatherDataEffects);
    weatherService = TestBed.inject(WeatherService);
  });

  describe('loadWeatherData$', () => {
    it('should call "getWeatherDataByLocation" from "weatherService" and fire "LoadWeatherDataSuccess" if "getWeatherDataByLocation" does not return errors', () => {
      const weatherServiceSpy = spyOn(
        weatherService,
        'getWeatherDataByLocation'
      ).and.callThrough();

      actions$ = of({ type: WeatherActionTypes.LoadWeatherData });

      effects.loadWeatherData$.subscribe((result) => {
        expect(result).toEqual(new LoadWeatherDataSuccess(WeatherDataMock));
        expect(weatherServiceSpy).toHaveBeenCalledTimes(1);
      });
    });
  });
});

describe('WeatherEffects with errors', () => {
  let actions$: Observable<Action>;
  let effects: WeatherDataEffects;
  let weatherService: WeatherService;
  let errorHandlerService: ErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WeatherDataEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState: { ...weatherStateMock } }),
        {
          provide: WeatherService,
          useClass: WeatherServiceErrorMock,
        },
        {
          provide: ErrorHandlerService,
          useClass: ErrorHandlerService,
        },
      ],
    });
    effects = TestBed.inject(WeatherDataEffects);
    weatherService = TestBed.inject(WeatherService);
    errorHandlerService = TestBed.inject(ErrorHandlerService);
  });

  describe('loadWeatherData$ with errors', () => {
    it('should call "getWeatherDataByLocation" and "handleHttpError" and fire "LoadWeatherDataFailure" if "getWeatherDataByLocation" returns errors', () => {
      const errorHandlerServiceSpy = spyOn(
        errorHandlerService,
        'handleHttpError'
      ).and.callThrough();

      const weatherServiceSpy = spyOn(
        weatherService,
        'getWeatherDataByLocation'
      ).and.callThrough();

      actions$ = of({ type: WeatherActionTypes.LoadWeatherData });

      effects.loadWeatherData$.subscribe((result) => {
        expect(result).toEqual(
          new LoadWeatherDataFailure(
            'An error occured. Please contact support.'
          )
        );
        expect(errorHandlerServiceSpy).toHaveBeenCalledTimes(1);
        expect(weatherServiceSpy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
