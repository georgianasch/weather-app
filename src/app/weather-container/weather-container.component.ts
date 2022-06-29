import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { WeatherApiConfig } from '../config';
import { buttonToggleOptions, MeasurementUnitSystem } from '../constants';
import { WeatherData } from '../models/WeatherData';
import { AppState } from '../state/app.state';
import { ChangeWeatherDataMeasurementUnit } from '../state/settings/settings.actions';
import { selectWeatherMeasurementUnit } from '../state/settings/settings.selectors';
import { LoadWeatherForecast } from '../state/forecast/weather-forecast.actions';
import { LoadWeatherData } from '../state/weather/weather.actions';
import { selectWeatherData } from '../state/weather/weather.selectors';

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.scss'],
})
export class WeatherContainerComponent implements OnInit {
  measurementUnit = MeasurementUnitSystem;
  WeatherApiConfig = WeatherApiConfig;
  buttonToggleOptions = buttonToggleOptions;
  currentMeasurementUnit = WeatherApiConfig.defaultUnit;
  weatherData: WeatherData;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select(selectWeatherMeasurementUnit)
      .subscribe((unit) => (this.currentMeasurementUnit = unit));

    this.store
      .select(selectWeatherData)
      .subscribe((weatherData) => (this.weatherData = weatherData));
  }

  search(location: string): void {
    this.loadWeatherData(location, this.currentMeasurementUnit);
    this.loadWeatherForecast(location, this.currentMeasurementUnit);
  }

  loadWeatherData(location: string, unit: MeasurementUnitSystem): void {
    this.store.dispatch(new LoadWeatherData(location, unit));
  }

  loadWeatherForecast(location: string, unit: MeasurementUnitSystem): void {
    this.store.dispatch(new LoadWeatherForecast(location, unit));
  }

  changeMeasurementUnit(unit: MeasurementUnitSystem): void {
    this.store.dispatch(
      new ChangeWeatherDataMeasurementUnit(
        unit,
        this.weatherData?.name || WeatherApiConfig.defaultLocation
      )
    );
  }
}
