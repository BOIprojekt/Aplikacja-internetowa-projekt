<template>
  <bmi>
    <div class="bmi">
      <h3>Sprawdź swoje BMI</h3>
     <div class="row">
        <div class="offset-md3">
            <form @submit.prevent="calculate">
              <div class="form-group">
                <label for="exampleInputEmail1">Wzrost w centymentrach</label>
                <input 
                type="text" 
                class="form-control mb-2" 
                placeholder="Twoj wzrost"
                v-model.number="height"
                required>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Masa w kilogramach</label>
                <input 
                type="text" 
                class="form-control mb-2" 
                placeholder="Twoja masa"
                v-model.number="mass"
                required>
              </div>
                <button class="btn btn-primary" type="submit">Oblicz</button>
            </form>
        </div>
    </div>
       <p v-if="isSubmited == true">Twoje BMI wynosi: {{ bmi }}<br> Ocena Sylwetki: {{score}}</p>
   </div>
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
      score: '',
      isSubmited: false,
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
      this.bmi = ((mass / height ** 2) *10000).toFixed(2);
      this.isSubmited = true
      if(this.bmi < 16 && this.bmi > 0) {
          this.score ='Wygłodzenie'
        }else if(this.bmi >=16 && this.bmi < 16.99) {
          this.score ='Wychudzenie'
        }else if(this.bmi >=17 && this.bmi < 18.49) {
          this.score ='Niedowaga'
        }else if(this.bmi >= 18.5 && this.bmi < 24.99){
          this.score ='Waga prawidłowa' 
        }else if(this.bmi >= 25 && this.bmi < 29.99){
          this.score ='Nadwaga' 
        }else if(this.bmi >= 30 && this.bmi < 34.99){
          this.score ='I stopień otyłości' 
        }else if(this.bmi >= 35 && this.bmi < 39.99){
          this.score ='II stopień otyłości' 
        }else if(this.bmi >= 40){
          this.score ='Otyłość skrajna' 
        }

    },

  },
};
</script>