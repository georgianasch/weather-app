import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherContainerComponent } from './weather-container.component';
import { MaterialModule } from '../material.module';
import { WeatherModule } from '../weather/weather.module';
import { WeatherForecastModule } from '../weather-forecast/weather-forecast.module';
import { SearchBarModule } from '../controls/search-bar/search-bar.module';
import { ButtonToggleModule } from '../controls/button-toggle/button-toggle.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [WeatherContainerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    WeatherForecastModule,
    WeatherModule,
    SearchBarModule,
    ButtonToggleModule,
    HttpClientModule,
  ],
})
export class WeatherContainerModule {}
