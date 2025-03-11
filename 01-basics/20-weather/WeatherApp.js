import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'

export default defineComponent({
  name: 'WeatherApp',

  setup() {
    const weatherData = getWeatherData();
    const kelvinToCelsius = (kelvin) => {
      return (kelvin - 273.1).toFixed(1)
    };
    const hPaToMmHg = (hPa) => {
      return Math.round(hPa * 0.75)
    };
    const isNightTime = (sunrise, sunset, currentTime) => {
      return currentTime < sunrise || currentTime > sunset
    };

    return {
      weatherData,
      WeatherConditionIcons,
      kelvinToCelsius,
      hPaToMmHg,
      isNightTime,
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <ul class="weather-list unstyled-list">
        <li v-for="(item, index) in weatherData" :key="index"
          :class="['weather-card', {'weather-card--night': isNightTime(item.current.sunrise, item.current.sunset, item.current.dt)}]">
          <div v-if="item.alert" class="weather-alert">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">
            Королевская метеослужба короля Арагорна II:
            {{ item.alert.description }}.</span>
          </div>
          <div>
            <h2 class="weather-card__name">
              {{ item.geographic_name }}
            </h2>
            <div class="weather-card__time">
              {{ item.current.dt }}
            </div>
          </div>
          <div class="weather-conditions">
            <div class="weather-conditions__icon" :title="item.current.weather.description">
              {{ WeatherConditionIcons[item.current.weather.id] }}
            </div>
            <div class="weather-conditions__temp">{{ kelvinToCelsius(item.current.temp) }} °C</div>
          </div>
          <div class="weather-details">
            <div class="weather-details__item">
              <div class="weather-details__item-label">Давление, мм рт. ст.</div>
              <div class="weather-details__item-value">{{ hPaToMmHg(item.current.pressure) }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Влажность, %</div>
              <div class="weather-details__item-value">{{ item.current.humidity }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Облачность, %</div>
              <div class="weather-details__item-value">{{ item.current.clouds }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Ветер, м/с</div>
              <div class="weather-details__item-value">{{ item.current.wind_speed }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
})
