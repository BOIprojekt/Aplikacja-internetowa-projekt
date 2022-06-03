<template>
    <h1>Zaloguj się</h1>
    <p><input size="50" type="text" placeholder="Email" v-model="login_email" /></p>
    <p><input size="50" type="password" placeholder="Hasło" v-model="login_password" /></p>
    <p v-if="errMsg2">{{ errMsg2 }}</p>
    <p><button @click="login">Zatwierdź</button></p>
    <p><button @click="SignInWithGoogle">Zaloguj się z Google</button></p>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { useRouter } from "vue-router";
import { reactive } from 'vue';
const login_email = ref("");
const login_password = ref("");
const errMsg2 = ref();
const router = useRouter();


const login = () => {
    const auth = getAuth();
    reactive(signInWithEmailAndPassword(auth, login_email.value, login_password.value))
        .then((data) => {
            console.log("Successfully registered!", data);
            router.push('/profil')
        })
        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
              case "auth/invalid-email":
                errMsg2.value = "Niewłaściwy email";
                break;
              case "auth/user-not-found":
                errMsg2.value = "Konto z takim emailem nie zostało znalezione";
                break;
              case "auth/wrong-password":
                errMsg2.value = "Niepoprawne hasło";
                break;
              default:
                errMsg2.value = "Email lub password są niepoprawne";
                break;
            }
        });

};

const SignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then((result) => {
            console.log(result.user)
            router.push("/profil")
        })
        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
              case "auth/invalid-email":
                errMsg2.value = "Niewłaściwy email";
                break;
              case "auth/user-not-found":
                errMsg2.value = "Konto z takim emailem nie zostało znalezione";
                break;
              case "auth/wrong-password":
                errMsg2.value = "Niepoprawne hasło";
                break;
              default:
                errMsg2.value = "Email lub password są niepoprawne";
                break;
            }
        })
};
</script>