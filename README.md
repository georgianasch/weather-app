## WeatherApp

## Based on the free https://openweathermap.org/ API

## The web application displays:

    # the weather data for the current day
    # the forecast for the next 5 days, by making the average of the forecast data for every 3 hours received from the API

## The location can be set by the user by using the search bar

    ## The user can search by
        # a city name e.g. Amsterdam
        # by city and country, separated by comma e.g. Paris, France
    ## The default location is set in the config file i.e. config.ts

## The measurement unit (Celsius or Fahrenheit) can be changed by using the toggle buttons from the top right corner

    ## This setting will impact the measurements for temperature, wind speed and pressure
    ## The default measurement unit system is set in the config file

## The weather forecast can be sorted ascending or descending by clicking the left/right arrow icon near the forecast cards

## As a structure, the main components are:

    # weather-container - which contains 2 other components:
        # weather - for the current weather
        # weather-forecast - for the forecast
            # weather-card for each day of the forecast
    # error - component which displays an error
    # button-toggle - button toggle control used for e.g. the measurement unit
    # search-bar - control with a search input

## Custom pipes:

    # sort.pipe - orders an array, ascending or descending, by a certain property
    # today.pipe - extends the DatePipe and returns 'Today' string if the date is today or the day of the week if not

## Utils classes:

    # array-utils - methods to help in array manipulation
    # date-utils - methods to help in date manipulation
    # weather-utils - methods to help in weather data manipulation

## Services:

    # weather - gets the current weather from the API
    # weather-forecast - gets the forecast from the API
    # error-handler - manipulated objects like HttpErrorResponse

## The application uses ngrx and currently has 3 types of state

    # weather - for the current day weather area
    # forecast - for the forecast area
    # settings - a more generic state which stores settings like the measurement unit
    All 3 states are part of the AppState interface

## eslint library is used for linting

## Angular Material is used for the UI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
