<template>
    <div class="profilAdd">
        <div class="row">
            <div class="col-md6 offset-md3">
                <h4>Dodaj wyniki pomiarów w centymetrach</h4>
                <form @submit.prevent="addMeasures">
                <div class="form-group">
                    <label for="exampleInputEmail1">Szyja</label>
                    <input 
                    type="text" 
                    class="form-control mb-2" 
                    placeholder="0"
                    v-model="neck">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Barki</label>
                    <input 
                    type="text" 
                    class="form-control mb-2" 
                    placeholder="0"
                    v-model="shoulders">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Klatka</label>
                    <input 
                    type="text" 
                    class="form-control mb-2" 
                    placeholder="0"
                    v-model="chest">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Ramiona</label>
                    <input 
                    type="text" 
                    class="form-control mb-2" 
                    placeholder="0"
                    v-model="arms">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Talia</label>
                    <input 
                    type="text" 
                    class="form-control mb-2" 
                    placeholder="0"
                    v-model="waist">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Biodra</label>
                    <input 
                    type="text" 
                    class="form-control mb-2" 
                    placeholder="0"
                    v-model="hips">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Uda</label>
                    <input 
                    type="text" 
                    class="form-control mb-2" 
                    placeholder="0"
                    v-model="thighs">
                </div>
                <button class="btn btn-primary" type="submit">Zapisz</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import {addDoc} from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import measuresColRef from '../firebase'
export default {
    data() {

        return {
            neck: null, 
            shoulders: null, 
            chest: null,
            arms: null,
            waist: null,
            hips: null,
            thighs: null, 
            userUid: firebase.auth().currentUser.uid,
            creationTime: Date.now(),
        }
    },

    methods: {
        async addMeasures() {
            console.log("Creating new profile");
            const addedProfile = await addDoc(measuresColRef, this.$data)
            alert("Dodano nowe pomiary")
            this.$router.push('/profil')
            console.log(addedProfile);
            }
}
}
</script>