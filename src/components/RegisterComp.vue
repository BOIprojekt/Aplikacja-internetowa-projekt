<template>
  <main class = "login">
    <section class="forms">
      <div class="register">
        <h2>Stwórz konto</h2>
        <p><input size="50" type="text" placeholder="Email" v-model="register_email" /></p>
        <p><input size="50" type="password" placeholder="Hasło" v-model="register_password" /></p>
        <p v-if="errMsg1">{{ errMsg1 }}</p>
        <p><button @click="register">Zatwierdź</button></p>
        <p><button @click="SignInWithGoogle">Zaloguj się z Google</button></p>
      </div>
    </section>
  </main>
</template>

<script setup>  
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useRouter } from "vue-router";
import { reactive } from "vue";
const register_email = ref("");
const register_password = ref("");
const errMsg1 = ref();
const router = useRouter();

const register = () => {
    reactive(createUserWithEmailAndPassword(getAuth(), register_email.value, register_password.value))
        .then((data) => {
            console.log("Successfully registered!", data);
            router.push('/profil')
        })
        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
              case "auth/invalid-email":
                errMsg1.value = "Niewłaściwy email";
                break;
              case "auth/email-already-in-use":
                errMsg1.value = "Konto z takim adresem email już istnieje";
                break;
              case "auth/weak-password":
                errMsg1.value = "Słabe hasło";
                break;
              default:
                errMsg1.value = "Email lub hasło są niepoprawne";
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
                errMsg1.value = "Niewłaściwy email";
                break;
              case "auth/user-not-found":
                errMsg1.value = "Konto z takim emailem nie zostało znalezione";
                break;
              case "auth/wrong-password":
                errMsg1.value = "Niepoprawne hasło";
                break;
              default:
                errMsg1.value = "Email lub password są niepoprawne";
                break;
            }
        })
};
</script>