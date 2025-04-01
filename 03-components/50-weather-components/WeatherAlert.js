import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherAlert',
  props: {
    alert: {
      type: Object,
      required: true,
    }
  },

  template: `
    <div class="weather-alert">
      <span class="weather-alert__icon">⚠️</span>
      <span class="weather-alert__description">
        Королевская метеослужба короля Арагорна II:
        {{ alert.description }}.
      </span>
    </div>
  `
})
