<template>
  <div class="profil">
    <h2>Obwody</h2>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h4>Twoje aktualne pomiary</h4>
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center ">
               Szyja(cm): {{measures.neck}} <br>
               Barki(cm): {{measures.shoulders}} <br>
               Klatka(cm): {{measures.chest}} <br>
               Ramiona(cm): {{measures.arms}} <br>
               Talia(cm): {{measures.waist}} <br>
               Biodra(cm): {{measures.hips}} <br>
               Uda(cm): {{measures.thighs}}      
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { db } from '../main';
import firebase from 'firebase/compat/app';

export default {
  data() {
    return {
      measures: {}
    }
  },
  methods: {
    async fetchMeasures() {
      let singleMeasure = {};
      await db.collection('measures')
        .where("userUid", "==", firebase.auth().currentUser.uid)
        .orderBy("creationTime", "desc")
        .limitToLast()
        .get()
        .then(querySnapshot => {
          if (!querySnapshot.empty)  {
            singleMeasure = querySnapshot.docs[0].data();
          }
        })
      console.log(singleMeasure);
      this.measures = singleMeasure;
    }
  },
  created() {
    this.fetchMeasures();
  }
}
</script>