<template>
    <h1>Stwórz konto</h1>
    <p><input size="50" type="text" placeholder="Email" v-model="register_email" /></p>
    <p><input size="50" type="password" placeholder="Hasło" v-model="register_password" /></p>
    <p v-if="errMsg1">{{ errMsg1 }}</p>
    <p><button @click="register">Zatwierdź</button></p>
    <p><button @click="SignInWithGoogle">Zaloguj się z Google</button></p>

    <h1>Zaloguj się</h1>
    <p><input size="50" type="text" placeholder="Email" v-model="login_email" /></p>
    <p><input size="50" type="password" placeholder="Hasło" v-model="login_password" /></p>
    <p v-if="errMsg2">{{ errMsg2 }}</p>
    <p><button @click="login">Zatwierdź</button></p>
    <p><button @click="SignInWithGoogle">Zaloguj się z Google</button></p>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { useRouter } from "vue-router";
import { reactive } from 'vue';
//import { useStore } from 'vuex';
const register_email = ref("");
const register_password = ref("");
const login_email = ref("");
const login_password = ref("");
const errMsg1 = ref();
const errMsg2 = ref();
const router = useRouter();




const register = () => {
    reactive(createUserWithEmailAndPassword(getAuth(), register_email.value, register_password.value))
        .then((data) => {
            console.log("Successfully registered!");
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

const login = () => {
    const auth = getAuth();
    reactive(signInWithEmailAndPassword(auth, login_email.value, login_password.value))
        .then((data) => {
            console.log("Successfully registered!");
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
</script>
 <script>
/* export default {
    setup () {
        const login_form = ref({});
        const register_form = ref({});
        const store = useStore();

        const login = () => {
            store.dispatch('login', login_form.value);   
        }

        const register = () => {
            store.dispatch('register', register_form.value);   
        }
        return {
            login_form,
            register_form,
            login,
            register
        }
    }

} */
</script> 