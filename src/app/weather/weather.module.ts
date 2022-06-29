import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { WeatherComponent } from './weather.component';
import { ErrorModule } from '../error/error.module';

@NgModule({
  declarations: [WeatherComponent],
  imports: [CommonModule, MaterialModule, ErrorModule],
  exports: [WeatherComponent],
})
export class WeatherModule {}
