import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { WeatherApiConfig } from '../config';
import { MeasurementUnitSystem, MeasurementUnits } from '../constants';
import { WeatherData } from '../models/WeatherData';
import { AppState } from '../state/app.state';
import {
  selectWeatherData,
  selectWeatherError,
} from '../state/weather/weather.selectors';
import { selectWeatherMeasurementUnit } from '../state/settings/settings.selectors';
import { LoadWeatherData } from '../state/weather/weather.actions';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  defaultUnit = WeatherApiConfig.defaultUnit;
  MeasurementUnits = MeasurementUnits;
  weatherData: WeatherData;
  measurementUnit: MeasurementUnitSystem;
  error: string;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(
      new LoadWeatherData(
        WeatherApiConfig.defaultLocation,
        WeatherApiConfig.defaultUnit
      )
    );

    const observable = combineLatest({
      weatherData: this.store.select(selectWeatherData),
      measurementUnit: this.store.select(selectWeatherMeasurementUnit),
      error: this.store.select(selectWeatherError),
    });
    observable.subscribe(({ weatherData, measurementUnit, error }) => {
      this.weatherData = weatherData;
      this.measurementUnit = measurementUnit;
      this.error = error;
    });
  }
}
