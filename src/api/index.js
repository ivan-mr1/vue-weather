import axios from 'axios'

const isDevelopment = import.meta.env.DEV
const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = import.meta.env.VITE_API_URL

/**
 * @param {string} city = город
 */
export const getWeatherData = (city) => {
  if (!isDevelopment) {
    return axios.get('/api/weather', {
      params: { city }
    })
  }
  
  return axios.get(BASE_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
      lang: 'en',
    },
  })
}
