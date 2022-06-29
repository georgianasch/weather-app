import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { TodayPipe } from '../pipes/today.pipe';
import { WeatherForecastCardComponent } from './weather-forecast-card.component';

@NgModule({
  declarations: [WeatherForecastCardComponent, TodayPipe],
  imports: [CommonModule, MaterialModule],
  exports: [WeatherForecastCardComponent],
  providers: [DatePipe],
})
export class WeatherForecastCardModule {}
