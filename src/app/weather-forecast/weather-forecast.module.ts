import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorModule } from '../error/error.module';
import { MaterialModule } from '../material.module';
import { SortPipe } from '../pipes/sort.pipe';
import { WeatherForecastCardModule } from '../weather-forecast-card/weather-forecast-card.module';
import { WeatherForecastComponent } from './weather-forecast.component';

@NgModule({
  declarations: [WeatherForecastComponent, SortPipe],
  imports: [
    CommonModule,
    MaterialModule,
    WeatherForecastCardModule,
    ErrorModule,
  ],
  exports: [WeatherForecastComponent],
})
export class WeatherForecastModule {}
