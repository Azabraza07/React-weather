import axios, { AxiosResponse } from "axios";
import api from "../axios";
import { Weather } from "../store/types/types";

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return api.get<Weather>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8e2659fd07ba8003ec8bac5c422f2e6c`
    );
  }
}
