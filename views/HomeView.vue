<template>
    
      <h2>Utwórz konto</h2>
      <p><input type="text" placeholder="Email" v-model="register_form.email" /></p>
      <p><input type="password" placeholder="Password" v-model="register_form.password" /></p>
      <p v-if="errMsg">{{ errMsg }}</p>
      <p><button @click="register">Submit</button></p>
      <p><button @click="SignInWithGoogle">Sign In With Google</button></p>
    

    <section>
       <form class="Login">
       <h2>Zaloguj się</h2>
       <p><input type="text" placeholder="Email" v-model="login_form.email" /></p>
       <p><input type="password" placeholder="Password" v-model="login_form.password" /></p>
       <p v-if="errMsg">{{ errMsg }}</p>
       <p><button @click="login">Submit</button></p>
       <p><button @click="SignInWithGoogle">Sign In With Google</button></p>
      </form>
    </section>
</template>

<script>
import { useStore } from 'vuex'
import { ref } from 'vue'
export default {
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

}
</script>
