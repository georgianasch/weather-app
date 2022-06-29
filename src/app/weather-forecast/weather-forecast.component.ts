import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { MeasurementUnitSystem, SortType } from '../constants';
import { WeatherForecast } from '../models/WeatherForecast';
import { AppState } from '../state/app.state';
import { selectWeatherMeasurementUnit } from '../state/settings/settings.selectors';
import {
  selectWeatherForecast,
  selectWeatherForecastError,
} from '../state/forecast/weather-forecast.selectors';
import { LoadWeatherForecast } from '../state/forecast/weather-forecast.actions';
import { WeatherApiConfig } from '../config';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss'],
})
export class WeatherForecastComponent implements OnInit {
  SortType = SortType;
  weatherForecast$: Observable<WeatherForecast[]>;
  measurementUnit: MeasurementUnitSystem;
  error: string;
  currentSorting = SortType.Ascending;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.loadWeatherForecast(
      WeatherApiConfig.defaultLocation,
      WeatherApiConfig.defaultUnit
    );

    this.weatherForecast$ = this.store.select(selectWeatherForecast);

    const observable = combineLatest({
      measurementUnit: this.store.select(selectWeatherMeasurementUnit),
      error: this.store.select(selectWeatherForecastError),
    });
    observable.subscribe(({ measurementUnit, error }) => {
      this.measurementUnit = measurementUnit;
      this.error = error;
    });
  }

  loadWeatherForecast(location: string, unit: MeasurementUnitSystem): void {
    this.store.dispatch(new LoadWeatherForecast(location, unit));
  }

  toggleSorting() {
    if (this.currentSorting === SortType.Ascending) {
      this.currentSorting = SortType.Descending;
    } else {
      this.currentSorting = SortType.Ascending;
    }
  }
}
