import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherDetails',
  props: {
    pressure: {
      type: [String, Number],
      required: true,
    },

    humidity: {
      type: [String, Number],
      required: true,
    },

    clouds: {
      type: [String, Number],
      required: true,
    },

    windSpeed: {
      type: [String, Number],
      required: true,
    }
  },

  setup() {
    const hPaToMmHg = (hPa) => {
      return Math.round(hPa * 0.75)
    }

    return {
      hPaToMmHg,
    }
  },

  template: `
    <div class="weather-details">
      <div class="weather-details__item">
        <div class="weather-details__item-label">Давление, мм рт. ст.</div>
        <div class="weather-details__item-value">{{ hPaToMmHg(pressure) }}</div>
      </div>
      <div class="weather-details__item">
        <div class="weather-details__item-label">Влажность, %</div>
        <div class="weather-details__item-value">{{ humidity }}</div>
      </div>
      <div class="weather-details__item">
        <div class="weather-details__item-label">Облачность, %</div>
        <div class="weather-details__item-value">{{ clouds }}</div>
      </div>
      <div class="weather-details__item">
        <div class="weather-details__item-label">Ветер, м/с</div>
        <div class="weather-details__item-value">{{ windSpeed }}</div>
      </div>
    </div>
  `
})
