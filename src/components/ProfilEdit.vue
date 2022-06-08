<template>
    <div class="profilEdit">
        <div class="row">
            <div class="col-md6 offset-md3">
                <h1>Zaktualizuj swoje dane: </h1>
                <form @submit.prevent="updateProfil">
                <div class="form-group">
                    <label for="exampleInputEmail1">Waga</label>
                    <input 
                    type="text" 
                    class="form-control mb-2" 
                    placeholder="Waga"
                    v-model="profilInfo.weight">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Wzrost</label>
                    <input 
                    type="text" 
                    class="form-control mb-2" 
                    placeholder="Wzrost"
                    v-model="profilInfo.height">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Wiek</label>
                    <input 
                    type="text" 
                    class="form-control mb-2" 
                    placeholder="Wiek"
                    v-model="profilInfo.age">
                </div>
                <button class="btn btn-primary">Zaktualizuj</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import profilesColRef from "../main.js";
import {getDoc, doc, setDoc} from 'firebase/firestore'
import firebase from 'firebase/compat/app'
export default {
    data() {
        return {
            selectedProfil: {},
            profilId: null,
            docRef: null,
            profilInfo: {
                weight: null,
                height: null,
                age: null,
                userUid: firebase.auth().currentUser.uid
            },
        }
    },
    methods: {
        async getProfil() { 
             let profilRef = doc(profilesColRef, this.profilId)
             this.docRef = profilRef
             let profil = await getDoc(this.docRef)
             let profilData = profil.data()
             this.profilInfo.weight = profilData.weight;
             this.profilInfo.height = profilData.height;
             this.profilInfo.age = profilData.age;
            },
        async updateProfil() {
                await setDoc(this.docRef, this.profilInfo)
                alert("Zaktualizowano dane")
                this.$router.push('/profil')
            }
    },
        created() {
            let profilId = this.$route.params.profilId
            this.profilId = profilId
            this.getProfil()
    }
}
</script>