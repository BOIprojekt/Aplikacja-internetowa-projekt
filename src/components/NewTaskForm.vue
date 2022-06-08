<template>
<h4>Dodaj swoje cele</h4>
  <taskform>
    <div class="row">
        <div class="col-md6 offset-md3">
            <form @submit.prevent="createNewTask">
              <div class="form-group">
                <input 
                type="text" 
                class="form-control mb-2" 
                placeholder="Wprowadź tekst tutaj"
                v-model="newTask.description"
                required>
              </div>
                <button class="btn btn-primary" type="submit">Dodaj</button>
            </form>
        </div>
    </div>
  </taskform>
</template>
        
<script>
import { reactive } from 'vue'
import { db } from '../main'
import firebase from 'firebase/compat/app';
export default {
    setup() {
        const newTask = reactive ({
            creationTime: null ,
            description: '',
            completed: false,
            userUid: '',
        })
        const tasksCollection = db.collection('tasks')

        const createNewTask = () => {
            tasksCollection.add({
                ...newTask,
                creationTime: Date.now(),
                userUid: firebase.auth().currentUser.uid
            })

            newTask.description = ''
        }

        return {
         newTask,
         createNewTask,
           
        }
    }
}
</script> 

<style>

</style>
