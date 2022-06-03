<template>
    <div class="register">
       <register-comp></register-comp>
       <login-comp></login-comp>
    </div>
</template>

<script setup>
import RegisterComp from '../components/RegisterComp.vue'
import LoginComp from '../components/LoginComp.vue'
//import { useStore } from 'vuex';
</script>

<script>
/*
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
*/
</script>