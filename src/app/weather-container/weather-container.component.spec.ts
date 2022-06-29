import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MeasurementUnitSystem } from '../constants';
import { appStateMock } from '../mocks/AppStateMock';
import { WeatherDataMock } from '../mocks/WeatherDataMock';
import { WeatherForecastService } from '../services/weather-forecast.service';
import { selectWeatherMeasurementUnit } from '../state/settings/settings.selectors';
import { selectWeatherData } from '../state/weather/weather.selectors';
import { WeatherContainerComponent } from './weather-container.component';
import { WeatherForecastServiceMock } from '../mocks/service-mocks/weather-forecast.service.mock';
import { SearchBarComponent } from '../controls/search-bar/search-bar.component';
import { LoadWeatherForecast } from '../state/forecast/weather-forecast.actions';
import { WeatherApiConfig } from '../config';
import { LoadWeatherData } from '../state/weather/weather.actions';
import { ButtonToggleComponent } from '../controls/button-toggle/button-toggle.component';
import { ChangeWeatherDataMeasurementUnit } from '../state/settings/settings.actions';

describe('WeatherComponent', () => {
  let component: WeatherContainerComponent;
  let fixture: ComponentFixture<WeatherContainerComponent>;
  let storeMock: MockStore;
  let weatherForecastService: WeatherForecastService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WeatherContainerComponent,
        SearchBarComponent,
        ButtonToggleComponent,
      ],
      providers: [
        {
          provide: WeatherForecastService,
          useClass: WeatherForecastServiceMock,
        },
        provideMockStore({
          initialState: { ...appStateMock },
          selectors: [
            {
              selector: selectWeatherData,
              value: WeatherDataMock,
            },
            {
              selector: selectWeatherMeasurementUnit,
              value: MeasurementUnitSystem.Metric,
            },
          ],
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherContainerComponent);
    component = fixture.componentInstance;
    weatherForecastService = TestBed.inject(WeatherForecastService);
    storeMock = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch LoadWeatherData and LoadWeatherForecast when search input value changes', async () => {
    const newLocation = 'Wien, Austria';
    const dispatchSpy = spyOn(storeMock, 'dispatch').and.callThrough();
    const searchControl = fixture.debugElement.query(By.css('app-search-bar'));
    const searchInput = searchControl.query(By.css('input'));

    searchInput.triggerEventHandler('change', {
      target: { value: newLocation },
    });
    fixture.detectChanges();
    await fixture.whenStable();

    expect(dispatchSpy).toHaveBeenCalledWith(
      new LoadWeatherForecast(newLocation, WeatherApiConfig.defaultUnit)
    );
    expect(dispatchSpy).toHaveBeenCalledWith(
      new LoadWeatherData(newLocation, WeatherApiConfig.defaultUnit)
    );
  });

  [[MeasurementUnitSystem.Imperial], [MeasurementUnitSystem.Metric]].forEach(
    ([unit]) => {
      it(`should dispatch ChangeWeatherDataMeasurementUnit when measurement unit changes to "${unit}" unit`, async () => {
        const dispatchSpy = spyOn(storeMock, 'dispatch');
        const toggleButtonsGroup = fixture.debugElement.query(
          By.css('mat-button-toggle-group')
        );

        toggleButtonsGroup.triggerEventHandler('change', {
          value: unit,
        });
        fixture.detectChanges();
        await fixture.whenStable();

        expect(dispatchSpy).toHaveBeenCalledWith(
          new ChangeWeatherDataMeasurementUnit(
            unit,
            WeatherApiConfig.defaultLocation
          )
        );
      });
    }
  );
});
