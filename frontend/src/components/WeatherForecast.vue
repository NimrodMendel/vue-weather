<template>
  <div>
    <h1 class="text-center mb12 mt12">Forecast for {{ city }}:</h1>
    <w-flex wrap justify-content-between>
      <w-card
        v-for="(day, index) in weather"
        :key="index"
        shadow
        class="card text-center py4 mxa"
      >
        <p class="title2 mb3">
          {{
            `${new Date(day.applicable_date).toLocaleDateString("en-us", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}`
          }}
        </p>
        <w-image
          :src="
            `https://www.metaweather.com/static/img/weather/${day.weather_state_abbr}.svg`
          "
        ></w-image>
        <p class="title2 mt5">{{ `${Math.ceil(day.the_temp)}°C` }}</p>
        <p class="title3 text-bold mt5">{{ day.weather_state_name }}</p>
        <p class="title4 mt5">
          <span class="text-italic title5">Max temperature:</span>
          {{ `${Math.ceil(day.max_temp)}°C` }}
        </p>
        <p class="title4 mt5">
          <span class="text-italic title5">Min temperature: </span
          >{{ `${Math.ceil(day.min_temp)}°C` }}
        </p>
        <p class="title4 mt5">
          <span class="text-italic title5">Wind speed: </span
          >{{ `${Math.ceil(day.wind_speed)} km/h` }}
        </p>
      </w-card>
    </w-flex>
  </div>
</template>

<script>
export default {
  name: "WeatherForecast",
  props: {
    weather: Array,
    city: String,
  },
};
</script>

<style>
.card {
  width: 300px;
}
</style>
