import { defineStore } from 'pinia'
import { getWeatherData } from '@/api'

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    weatherData: null,
    loading: false,
    error: null,
  }),

  actions: {
    async getWeatherData(city) {
      this.loading = true
      this.error = null

      try {
        const response = await getWeatherData(city)
        this.weatherData = response.data
      } catch (err) {
        this.error = 'City not found or API error'
        this.weatherData = null
        console.error(err)
      } finally {
        this.loading = false
      }
    },
  },
})
