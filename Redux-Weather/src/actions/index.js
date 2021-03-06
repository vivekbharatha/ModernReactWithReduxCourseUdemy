import axios from 'axios';

import env from './../../env';
const API_KEY = env.WEATHER_KEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},in`;
  const request = axios.get(url); // Promise
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
