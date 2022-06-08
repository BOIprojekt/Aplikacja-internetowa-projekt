<template>
    <div class="profilAdd">
        <div class="row">
            <div class="col-md6 offset-md3">
                <h4>Podaj swoje dane</h4>
                <form @submit.prevent="addProfil">
                <div class="form-group">
                    <label for="exampleInputEmail1">Waga</label>
                    <input 
                    type="text" 
                    class="form-control mb-2" 
                    placeholder="Waga(kg)"
                    v-model="weight">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Wzrost</label>
                    <input 
                    type="text" 
                    class="form-control mb-2" 
                    placeholder="Wzrost(cm)"
                    v-model="height">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Wiek</label>
                    <input 
                    type="text" 
                    class="form-control mb-2" 
                    placeholder="Wiek"
                    v-model="age">
                </div>
                <button class="btn btn-primary" type="submit">Zapisz</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import profilesColRef from "../main.js";
import {addDoc} from 'firebase/firestore';
import firebase from 'firebase/compat/app';
export default {
    data() {
        return {
            weight: null, 
            height: null, 
            age: null, 
            userUid: firebase.auth().currentUser.uid,
            creationTime: Date.now(),
        }
    },
    methods: {
        async addProfil() {
            console.log("Creating new profile");
            const addedProfile = await addDoc(profilesColRef, this.$data)
            alert("Dodano nowy profil")
            this.$router.push('/profil')
            console.log(addedProfile);
            }
}
}
</script>
