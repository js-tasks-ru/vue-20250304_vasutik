import { defineComponent } from 'vue'
import { WeatherConditionIcons } from './weather.service.ts'

export default defineComponent({
  name: 'WeatherConditions',
  props: {
    weatherId: {
      type: [String, Number],
      required: true,
    },

    temp: {
      type: [String, Number],
      required: true,
    },

    description: {
      type: String,
      required: true,
    }
  },

  setup() {
    const kelvinToCelsius = (kelvin) => {
      return (kelvin - 273.1).toFixed(1)
    }

    return {
      WeatherConditionIcons,
      kelvinToCelsius,
    }
  },

  template: `
    <div class="weather-conditions">
      <div class="weather-conditions__icon" :title="description">
        {{ WeatherConditionIcons[weatherId] }}
      </div>
      <div class="weather-conditions__temp">{{ kelvinToCelsius(temp) }} °C</div>
    </div>
  `
})
