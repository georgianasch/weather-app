import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { WeatherDataApiResponse } from 'src/app/models/WeatherDataApiResponse';
import {
  LoadWeatherData,
  LoadWeatherDataFailure,
  LoadWeatherDataSuccess,
  WeatherActionTypes,
} from './weather.actions';
import { WeatherApiConfig } from 'src/app/config';
import { WeatherService } from 'src/app/services/weather.service';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class WeatherDataEffects {
  constructor(
    private actions$: Actions,
    private weatherService: WeatherService,
    private errorHandlerService: ErrorHandlerService
  ) {}

  loadWeatherData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActionTypes.LoadWeatherData),
      mergeMap((action: LoadWeatherData) => {
        console.log(
          `useMockWeatherData:${WeatherApiConfig.useMockWeatherData}`
        );
        return (
          WeatherApiConfig.useMockWeatherData
            ? this.weatherService.getWeatherDataResponseMock()
            : this.weatherService.getWeatherDataByLocation(
                action.location,
                action.measurementUnit
              )
        ).pipe(
          map(
            (weatherData: WeatherDataApiResponse) =>
              new LoadWeatherDataSuccess(
                this.weatherService.mapWeatherDataResponse(weatherData)
              )
          ),
          catchError((error: HttpErrorResponse) => {
            return of(
              new LoadWeatherDataFailure(
                this.errorHandlerService.handleHttpError(error)
              )
            );
          })
        );
      })
    )
  );
}
