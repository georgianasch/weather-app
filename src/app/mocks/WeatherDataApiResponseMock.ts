import { WeatherDataApiResponse } from '../models/WeatherDataApiResponse';

export const WeatherDataApiResponseMock: WeatherDataApiResponse = {
  coord: {
    lon: 26.1063,
    lat: 44.4323,
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
    },
  ],
  base: 'stations',
  main: {
    temp: 27.77,
    feels_like: 27.6,
    temp_min: 17.7,
    temp_max: 28.05,
    pressure: 1008,
    humidity: 42,
  },
  visibility: 10000,
  wind: {
    speed: 2.68,
    deg: 0,
  },
  clouds: {
    all: 0,
  },
  dt: 1656151292,
  sys: {
    type: 2,
    id: 2032494,
    country: 'RO',
    sunrise: 1656124325,
    sunset: 1656180245,
  },
  timezone: 10800,
  id: 683506,
  name: 'Bucharest',
  cod: 200,
};
