import { WeatherApiConfig } from '../config';

export class WeatherUtils {
  /**
   * Gets the weather data icon url based on openweathermap API
   *
   * @param iconCode - The icon code received from the API
   * @returns weather data icon url
   *
   */
  static getWeatherDataIconUrl(iconCode: string): string {
    return `${WeatherApiConfig.baseUrl}img/w/${iconCode}.png`;
  }
}
