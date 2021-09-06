<template>
  <w-app>
    <header>
      <Navbar />
    </header>
    <main>
      <w-flex column align-center justify-center>
        <Form :checkWeather="checkWeather" />
        <div v-if="loading" class="mt12">
          <Spinner />
        </div>
        <div v-if="error">
          <w-alert error outline shadow no-border>{{ error }}</w-alert>
        </div>
        <w-flex v-if="weather" justify-space-between class="mt10 ">
          <WeatherForecast :weather="weather" :city="city" />
        </w-flex>
      </w-flex>
    </main>
    <footer class="footer">Nimrod Mendel 2021</footer>
  </w-app>
</template>

<script>
import { getWeatherForecast } from "./lib/api";
import Navbar from "./components/Navbar.vue";
import Form from "./components/Form.vue";
import Spinner from "./components/Spinner.vue";
import WeatherForecast from "./components/WeatherForecast.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Form,
    Spinner,
    WeatherForecast,
  },
  data: () => ({
    loading: false,
    weather: null,
    error: "",
    city: "",
  }),
  methods: {
    async checkWeather(city) {
      this.error = "";
      this.weather = null;
      this.loading = true;
      this.city = "";
      const res = await getWeatherForecast(city);

      if (res.error) {
        this.error = res.error;
      } else {
        this.city = city;
        this.weather = res.consolidated_weather;
      }

      this.loading = false;
    },
  },
};
</script>

<style>
#app {
  font-family: "Glory", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.footer {
  position: fixed;
  padding: 1rem;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style>
