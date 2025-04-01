import { defineComponent } from 'vue'

import { getWeatherData } from './weather.service.ts'
import WeatherCard from './WeatherCard.js'

import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'
import './WeatherApp.css'


export default defineComponent({
  name: 'WeatherApp',

  components: {
    WeatherCard,
  },

  setup() {
    const weatherData = getWeatherData()
    const isNightTime = (sunrise, sunset, currentTime) => {
      return currentTime < sunrise || currentTime > sunset
    }

    return {
      weatherData,
      isNightTime,
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <ul class="weather-list unstyled-list">

        <WeatherCard
          v-for="(item, index) in weatherData"
          :key="index"
          :item="item"
          :is-night="isNightTime(item.current.sunrise, item.current.sunset, item.current.dt)"
        />
      </ul>
    </div>
  `
})
