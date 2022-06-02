<template>
  <bmi>
  <form @submit.prevent="calculate">
    <div class="bmi">
      <br>
      <label>Wzrost w centymentrach </label>
      <input v-model.number="height" />
    </div>
<br>
    <div>
      <label>Masa w kilogramach </label>
      <input v-model.number="mass" />
    </div>
<br>
    <button type="submit">Oblicz</button>
  </form>
  <p>Twoje BMI wynosi: {{ bmi }}</p>
  </bmi>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      height: 0,
      mass: 0,
      bmi: 0,
    };
  },
  computed: {
    formValid() {
      const { height, mass } = this;
      return +height > 0 && +mass > 0;
    },
  },
  methods: {
    calculate() {
      if (!this.formValid) {
        return;
      }
      const { height, mass } = this;
      this.bmi = (mass / height ** 2) *10000;
    },
  },
};
</script>