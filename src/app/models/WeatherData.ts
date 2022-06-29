export interface WeatherData {
  name?: string;
  countryCode?: string;
  timezone?: number;
  minTemperature?: number;
  maxTemperature?: number;
  description?: string;
  mainDescription?: string;
  iconUrl?: string;
  temperature?: number;
  feelsLike?: number;
  pressure?: number;
  humidity?: number;
  visibility?: number;
  windSpeed?: number;
  sunrise?: string;
  sunset?: string;
  lastUpdatedAt?: Date;
}
