<template>
  <div class="profil">
    <h3>Na tle pozostałych użytkowników</h3>
    <div class="container">
      <div class="row">
        <div class="offset-md-4 justify-content-between align-items-center">
          <table class="col-md-6">
            <tr>
              <th>Twój pomiar</th>
              <th>Średnia użytkowników</th>
            </tr>
            <tr>
              <td>Waga: {{ stats.currentUser.weight }}</td>
              <td>Waga: {{ stats.avgStats.avgWeight }}</td>
            </tr>
            <tr>
              <td>Wzrost: {{ stats.currentUser.height }}</td>
              <td>Wzrost: {{stats.avgStats.avgHeight}}</td>
            </tr>
            <tr>
              <td>Wiek: {{ stats.currentUser.age }}</td>
              <td>Wiek: {{ stats.avgStats.avgAge }}</td>
            </tr>
          </table>
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
      stats: {
        currentUser: {},
        avgStats: {}
      }
    }
  },
  methods: {
    async computeStats() {
      let currentUserProfile = {};
      let currentFirebaseUser = firebase.auth().currentUser;
      let allUsersProfiles = {}

      await db.collection('profiles')
        .where("userUid", "==", currentFirebaseUser.uid)
        .orderBy("creationTime", "desc")
        .limitToLast()
        .get()
        .then(querySnapshot => {
          if (!querySnapshot.empty) {
            currentUserProfile = querySnapshot.docs[0].data();
          }
        })

      await db.collection('profiles')
        .where("userUid", "!=", currentFirebaseUser.uid)
        .get()
        .then((querySnapshot) => {
          let sumHeight = 0;
          let sumWeight = 0;
          let sumAge = 0;
          querySnapshot.forEach((doc) => {
            sumHeight += parseFloat(doc.data()['height'])
            sumWeight += parseFloat(doc.data()['weight'])
            sumAge += parseFloat(doc.data()['age'])
          })

          if (querySnapshot.size > 0) {
            allUsersProfiles = {
              avgHeight: (sumHeight / querySnapshot.size).toFixed(2),
              avgWeight: (sumWeight / querySnapshot.size).toFixed(2),
              avgAge: (sumAge / querySnapshot.size).toFixed(2)
            }
          }
        })

      console.log(allUsersProfiles);

      this.stats = {
        currentUser: currentUserProfile,
        avgStats: allUsersProfiles
      }
    }
  },
  created() {
    this.computeStats();
  }
}
</script>