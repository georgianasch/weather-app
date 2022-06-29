import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherComponent } from './weather.component';
import { provideMockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
import { ErrorComponent } from '../error/error.component';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherComponent, ErrorComponent],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error div and hide weather details when errors are returned from the api', () => {
    const error = 'City not found';
    component.error = error;
    fixture.detectChanges();
    const cardsDiv = fixture.debugElement.query(
      By.css('.weather-details-card__summary')
    );
    const errorDiv = fixture.debugElement.query(
      By.css('.weather-details-card__errors')
    );

    expect(cardsDiv).toBeFalsy();
    expect(errorDiv).toBeTruthy();
    expect(errorDiv.nativeElement.textContent).toEqual(error);
  });
});
