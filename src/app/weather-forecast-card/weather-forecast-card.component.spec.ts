import { DatePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { TodayPipe } from '../pipes/today.pipe';

import { WeatherForecastCardComponent } from './weather-forecast-card.component';

describe('WeatherForecastCardComponent', () => {
  let component: WeatherForecastCardComponent;
  let fixture: ComponentFixture<WeatherForecastCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherForecastCardComponent, TodayPipe],
      providers: [DatePipe, provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherForecastCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
