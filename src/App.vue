<template>
  <div class = "nav">
    <div class = "reg">
      <router-link to="/" v-if="!isLoggedIn">Rejestracja </router-link>
    </div>
    <div class = "topnav">
     <router-link to="/profil" v-if="isLoggedIn">Profil użytkownika </router-link>
     <router-link to="/dimensions" v-if="isLoggedIn">Wymiary </router-link>
     <router-link to="/stats" v-if="isLoggedIn">Statystyki </router-link>
     <button @click="handleSignOut" v-if="isLoggedIn">Wyloguj</button>
     </div>
  </div>
  <router-view/>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from './router';

const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  text-align: center;
  max-width:100%;
  box-sizing:border-box;
  color: #FFF;
	background-color: rgb(46, 209, 245);
	background-image: linear-gradient(
		to bottom right,
		rgb(46, 209, 245) 0%,
		rgb(7, 126, 134) 75%
	);
}

.reg {
  visibility: hidden;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
