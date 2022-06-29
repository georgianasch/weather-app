import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideMockStore } from '@ngrx/store/testing';
import { MeasurementUnitSystem } from '../constants';
import { ErrorComponent } from '../error/error.component';
import { appStateMock } from '../mocks/AppStateMock';
import { WeatherForecastListMock } from '../mocks/WeatherForecastListMock';
import { SortPipe } from '../pipes/sort.pipe';
import {
  selectWeatherForecast,
  selectWeatherForecastError,
} from '../state/forecast/weather-forecast.selectors';
import { selectWeatherMeasurementUnit } from '../state/settings/settings.selectors';

import { WeatherForecastComponent } from './weather-forecast.component';

describe('WeatherForecastComponent', () => {
  let component: WeatherForecastComponent;
  let fixture: ComponentFixture<WeatherForecastComponent>;
  const firstForecastDate = '2022-06-26';
  const lastForecastDate = '2022-07-01';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherForecastComponent, ErrorComponent, SortPipe],
      providers: [
        provideMockStore({
          initialState: { ...appStateMock },
          selectors: [
            {
              selector: selectWeatherForecast,
              value: WeatherForecastListMock,
            },
            {
              selector: selectWeatherForecastError,
              value: '',
            },
            {
              selector: selectWeatherMeasurementUnit,
              value: MeasurementUnitSystem.Metric,
            },
          ],
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort forecast ascending by default', () => {
    const forecastCards = fixture.debugElement.queryAll(
      By.css('app-weather-forecast-card')
    );

    expect(forecastCards.length).toBe(6);
    expect(forecastCards[0].nativeElement.weatherForecast.date).toEqual(
      firstForecastDate
    );
    expect(forecastCards[5].nativeElement.weatherForecast.date).toEqual(
      lastForecastDate
    );
  });

  it('should sort forecast descending by date when you click the toggle sorting icon', () => {
    const toggleSortingIcon = fixture.debugElement.query(
      By.css('.weather-forecast-sort-desc')
    );

    toggleSortingIcon.nativeElement.click();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const forecastCards = fixture.debugElement.queryAll(
        By.css('app-weather-forecast-card')
      );
      expect(forecastCards.length).toBe(6);
      expect(forecastCards[0].nativeElement.weatherForecast.date).toEqual(
        lastForecastDate
      );
      expect(forecastCards[5].nativeElement.weatherForecast.date).toEqual(
        firstForecastDate
      );
    });
  });

  it('should sort forecast ascending by date when you click the toggle sorting icon twice', () => {
    const toggleSortingIcon = fixture.debugElement.query(
      By.css('.weather-forecast-sort-desc')
    );

    toggleSortingIcon.nativeElement.click();
    toggleSortingIcon.nativeElement.click();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const forecastCards = fixture.debugElement.queryAll(
        By.css('app-weather-forecast-card')
      );
      expect(forecastCards.length).toBe(6);
      expect(forecastCards[0].nativeElement.weatherForecast.date).toEqual(
        firstForecastDate
      );
      expect(forecastCards[5].nativeElement.weatherForecast.date).toEqual(
        lastForecastDate
      );
    });
  });

  it('should show error div and hide forecast cards when errors are returned from the api', () => {
    const error = 'City not found';
    component.error = error;
    fixture.detectChanges();
    const cardsDiv = fixture.debugElement.query(
      By.css('.weather-forecast-cards')
    );
    const errorDiv = fixture.debugElement.query(
      By.css('.weather-forecast-error')
    );

    expect(cardsDiv).toBeFalsy();
    expect(errorDiv).toBeTruthy();
    expect(errorDiv.nativeElement.textContent).toEqual(error);
  });
});
