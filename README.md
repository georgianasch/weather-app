# WeatherApp

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

## Example of response from the weather data API:

{
"coord": {
"lon": 26.1063,
"lat": 44.4323
},
"weather": [
{
"id": 800,
"main": "Clear",
"description": "clear sky",
"icon": "01d"
}
],
"base": "stations",
"main": {
"temp": 29.43,
"feels_like": 28.96,
"temp_min": 27.79,
"temp_max": 31.1,
"pressure": 1009,
"humidity": 39
},
"visibility": 10000,
"wind": {
"speed": 4.12,
"deg": 60
},
"clouds": {
"all": 0
},
"dt": 1656149961,
"sys": {
"type": 2,
"id": 2032494,
"country": "RO",
"sunrise": 1656124325,
"sunset": 1656180245
},
"timezone": 10800,
"id": 683506,
"name": "Bucharest",
"cod": 200
}
