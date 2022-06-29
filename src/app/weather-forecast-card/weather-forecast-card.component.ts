import { Component, Input, OnInit } from '@angular/core';
import { WeatherApiConfig } from '../config';
import { MeasurementUnits, MeasurementUnitSystem } from '../constants';
import { WeatherForecast } from '../models/WeatherForecast';

@Component({
  selector: 'app-weather-forecast-card',
  templateUrl: './weather-forecast-card.component.html',
  styleUrls: ['./weather-forecast-card.component.scss'],
})
export class WeatherForecastCardComponent {
  @Input() weatherForecast: WeatherForecast;
  @Input() measurementUnit: MeasurementUnitSystem =
    WeatherApiConfig.defaultUnit;

  defaultUnit = WeatherApiConfig.defaultUnit;
  MeasurementUnits = MeasurementUnits;

  constructor() {}
}
