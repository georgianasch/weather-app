import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherContainerComponent } from './weather-container/weather-container.component';

const routes: Routes = [
  {
    path: 'weather',
    component: WeatherContainerComponent,
  },
  { path: '', redirectTo: '/weather', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
