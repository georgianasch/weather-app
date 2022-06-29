import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { WeatherApiConfig } from 'src/app/config';
import { settingsStateMock } from 'src/app/mocks/AppStateMock';
import { LoadWeatherForecast } from '../../forecast/weather-forecast.actions';
import { LoadWeatherData } from '../../weather/weather.actions';
import { SettingsActionTypes } from '../settings.actions';
import { SettingsEffects } from '../settings.effects';
import { skip, take } from 'rxjs';

describe('SettingsEffects', () => {
  let actions$: Observable<Action>;
  let effects: SettingsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SettingsEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState: { ...settingsStateMock } }),
      ],
    });
    effects = TestBed.inject(SettingsEffects);
  });

  describe('loadWeatherData$', () => {
    it('should fire "LoadWeatherData" and "LoadWeatherForecast"', () => {
      actions$ = of({
        type: SettingsActionTypes.ChangeWeatherDataMeasurementUnit,
        unit: WeatherApiConfig.defaultUnit,
        location: WeatherApiConfig.defaultLocation,
      });

      effects.loadWeatherData$.pipe(take(1)).subscribe((result) => {
        expect(result).toEqual(
          new LoadWeatherData(
            WeatherApiConfig.defaultLocation,
            WeatherApiConfig.defaultUnit
          )
        );
      });
      effects.loadWeatherData$.pipe(skip(1), take(1)).subscribe((result) => {
        expect(result).toEqual(
          new LoadWeatherForecast(
            WeatherApiConfig.defaultLocation,
            WeatherApiConfig.defaultUnit
          )
        );
      });
    });
  });
});
