<template>
  <div
    class="min-h-screen bg-cover bg-bottom transition-all duration-500"
    :class="isWarm ? 'bg-[url(@/assets/hot.webp)]' : 'bg-[url(@/assets/cold.webp)]'"
  >
    <main class="min-h-screen bg-linear-to-b from-black/25 to-black/75 p-6">
      <div class="mb-8">
        <input
          type="text"
          v-model="city"
          @keyup.enter="handleSearch"
          placeholder="Search city..."
          class="block w-full rounded-tr-2xl rounded-bl-2xl bg-white/50 p-4 text-xl text-[#000000] shadow-lg transition-all outline-none focus:rounded-tl-2xl focus:rounded-tr-none focus:rounded-br-2xl focus:rounded-bl-none focus:bg-white/75"
        />
      </div>

      <div v-if="weather?.main" class="text-center text-white">
        <div class="mb-8">
          <h1 class="text-3xl font-medium drop-shadow-md">
            {{ weather.name }}, {{ weather.sys.country }}
          </h1>
          <p class="text-xl font-light italic opacity-80">{{ currentDate }}</p>
        </div>

        <div
          class="my-8 inline-block rounded-2xl bg-white/25 px-6 py-3 text-8xl font-black shadow-xl drop-shadow-lg"
        >
          {{ Math.round(weather.main.temp) }}°c
        </div>

        <p class="text-5xl font-bold italic drop-shadow-lg">
          {{ weather.weather[0].main }}
        </p>
      </div>

      <div v-else-if="loading" class="text-center text-2xl text-white italic">Loading...</div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useWeatherStore } from '@/store'

const city = ref('')
const store = useWeatherStore()
const weather = computed(() => store.weatherData)
const loading = computed(() => store.loading)

const isWarm = computed(() => (weather.value?.main?.temp ?? 0) > 16)

const currentDate = computed(() => {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date())
})

const handleSearch = () => {
  if (city.value.trim()) {
    store.getWeatherData(city.value)
    city.value = ''
  }
}
</script>
