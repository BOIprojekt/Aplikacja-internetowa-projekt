<template>
    <h1>Sign In to an account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p v-if="errMsg">{{ errMsg }}</p>
    <p><button @click="login">Submit</button></p>
    <p><button @click="SignInWithGoogle">Sign In With Google</button></p>
</template>

<script setup>
import {ref} from "vue";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const errMsg = ref();
const router = useRouter();

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