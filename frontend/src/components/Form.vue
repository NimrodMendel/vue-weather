<template>
  <div>
    <w-form @submit.prevent="onSubmit">
      <w-flex column align-center justify-center class="mt12">
        <div class="row">
          <w-input
            outline
            shadow
            class="p2"
            label="City"
            :validators="[validators.required]"
            v-model="city"
          ></w-input>
        </div>
        <div class="row">
          <w-button class="mt5" type="submit" bg-color="info" round shadow
            >Check weather</w-button
          >
        </div>
      </w-flex>
    </w-form>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    checkWeather: Function,
  },
  data: () => ({
    validators: {
      required: (city) => !!city || "This field is required",
    },
    city: "",
  }),
  methods: {
    onSubmit() {
      console.log(this.city);
      this.checkWeather();
    },
  },
};
</script>

<style></style>
