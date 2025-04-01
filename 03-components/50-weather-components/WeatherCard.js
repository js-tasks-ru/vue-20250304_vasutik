import { defineComponent } from 'vue'
import WeatherAlert from './WeatherAlert.js'
import WeatherHeader from './WeatherHeader.js'
import WeatherConditions from './WeatherConditions.js'
import WeatherDetails from './WeatherDetails.js'

export default defineComponent({
  name: 'WeatherCard',
  components: {
    WeatherAlert,
    WeatherHeader,
    WeatherConditions,
    WeatherDetails,
  },

  props: {
    item: {
      type: Object,
      required: true,
    },

    isNight: {
      type: Boolean,
      default: false,
    }
  },

  template: `
    <li :class="['weather-card', {'weather-card--night': isNight}]">
      <WeatherAlert v-if="item.alert" :alert="item.alert" />
      <WeatherHeader :name="item.geographic_name" :time="item.current.dt" />
      <WeatherConditions
        :weather-id="item.current.weather.id"
        :temp="item.current.temp"
        :description="item.current.weather.description"
      />
      <WeatherDetails
        :pressure="item.current.pressure"
        :humidity="item.current.humidity"
        :clouds="item.current.clouds"
        :wind-speed="item.current.wind_speed"
      />
    </li>
  `
})
