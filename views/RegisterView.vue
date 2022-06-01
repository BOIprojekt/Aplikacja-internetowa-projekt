<template>
    <h1>Create an account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p v-if="errMsg">{{ errMsg }}</p>
    <p><button @click="register">Submit</button></p>
    <p><button @click="SignInWithGoogle">Sign In With Google</button></p>

    <h1>Sign In to an account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p v-if="errMsg">{{ errMsg }}</p>
    <p><button @click="login">Submit</button></p>
    <p><button @click="SignInWithGoogle">Sign In With Google</button></p>
</template>

<script setup>
import { ref } from 'vue'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const errMsg = ref();
const router = useRouter();

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Successfully registered!", data);
            router.push('/feed')
        })
        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
              case "auth/invalid-email":
                errMsg.value = "Niewłaściwy email";
                break;
              case "auth/email-already-in-use":
                errMsg.value = "Konto z takim adresem email już istnieje";
                break;
              case "auth/weak-password":
                errMsg.value = "Słabe hasło";
                break;
              default:
                errMsg.value = "Email lub hasło są niepoprawne";
                break;
            }
        });

};

const login = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log("Successfully registered!", data);
            router.push('/feed')
        })
        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
              case "auth/invalid-email":
                errMsg.value = "Niewłaściwy email";
                break;
              case "auth/user-not-found":
                errMsg.value = "Konto z takim emailem nie zostało znalezione";
                break;
              case "auth/wrong-password":
                errMsg.value = "Niepoprawne hasło";
                break;
              default:
                errMsg.value = "Email lub password są niepoprawne";
                break;
            }
        });

};
</script>