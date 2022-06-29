import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs';
import {
  ChangeWeatherDataMeasurementUnit,
  SettingsActionTypes,
} from './settings.actions';
import { LoadWeatherData } from '../weather/weather.actions';
import { LoadWeatherForecast } from '../forecast/weather-forecast.actions';

@Injectable()
export class SettingsEffects {
  constructor(private actions$: Actions) {}

  loadWeatherData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SettingsActionTypes.ChangeWeatherDataMeasurementUnit),
      mergeMap((action: ChangeWeatherDataMeasurementUnit) => {
        return [
          new LoadWeatherData(action.location, action.unit),
          new LoadWeatherForecast(action.location, action.unit),
        ];
      })
    )
  );
}
