<template>
  <div class="profil">
    <h1>Panel użytkownika</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h4>Twoje aktualne dane</h4>
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center ">
              Waga: {{ profiles.weight }}<br>
              Wzrost: {{profiles.height}}<br>
              Wiek: {{profiles.age}}
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
      profiles: {}
    }
  },
  methods: {
    async fetchProfiles() {
      let singlePtofile = {};
      let currentFirebaseUser = firebase.auth().currentUser;

      await db.collection('profiles')
        .where("userUid", "==", currentFirebaseUser.uid)
        .orderBy("creationTime", "desc")
        .limitToLast()
        .get()
        .then(querySnapshot => {
          if (!querySnapshot.empty)  {
            singlePtofile = querySnapshot.docs[0].data();
          }
        })
      this.profiles = singlePtofile;
    }
  },
  created() {
    this.fetchProfiles();
  }
}
</script>