import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { WeatherApiConfig } from 'src/app/config';
import { WeatherForecastApiResponse } from 'src/app/models/WeatherForecastApiResponse';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { WeatherForecastService } from 'src/app/services/weather-forecast.service';
import {
  LoadWeatherForecast,
  LoadWeatherForecastFailure,
  LoadWeatherForecastSuccess,
  WeatherForecastActionTypes,
} from './weather-forecast.actions';

@Injectable()
export class WeatherForecastEffects {
  constructor(
    private actions$: Actions,
    private weatherForecastService: WeatherForecastService,
    private errorHandlerService: ErrorHandlerService
  ) {}

  loadWeatherForecast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherForecastActionTypes.LoadWeatherForecast),
      mergeMap((action: LoadWeatherForecast) => {
        console.log(
          `useMockWeatherForecast:${WeatherApiConfig.useMockWeatherForecast}`
        );
        return (
          WeatherApiConfig.useMockWeatherForecast
            ? this.weatherForecastService.getWeatherForecastResponseMock()
            : this.weatherForecastService.getWeatherForecastByLocation(
                action.location,
                action.measurementUnit
              )
        ).pipe(
          map(
            (weatherForecast: WeatherForecastApiResponse) =>
              new LoadWeatherForecastSuccess(
                this.weatherForecastService.mapWeatherForecastResponse(
                  weatherForecast
                )
              )
          ),
          catchError((error: HttpErrorResponse) => {
            return of(
              new LoadWeatherForecastFailure(
                this.errorHandlerService.handleHttpError(error)
              )
            );
          })
        );
      })
    )
  );
}
