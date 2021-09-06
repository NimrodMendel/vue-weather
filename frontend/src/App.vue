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
      </w-flex>
    </main>
  </w-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Form from "./components/Form.vue";
import Spinner from "./components/Spinner.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Form,
    Spinner,
  },
  data: () => ({
    loading: false,
    data: null,
  }),
  methods: {
    checkWeather() {
      this.loading = true;
      console.log("Hello world");
      //this.loading = false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
