<template>
<div class="tasksList">
  <h2>Lista celów</h2>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <ul class="list-group">
          <table class="table"> 
          <tbody>
            <tr v-for="{id, description, completed} in tasks" :key="id" class="list-group-item d-flex justify-content-between align-items-center">
              <td class="description"
                v-bind:class="{completed: completed}" @click='updateTaskCompletion(id)' >{{ description }}
              </td>
              <span class="badge badge-primary badge-pill">
              <td>
                <button @click='deleteTask(id)' class="btn btn-danger">Usuń</button>
              </td>
              </span>
            </tr>
          </tbody>
          </table>
        </ul>
      </div>
    </div>
  </div>    
</div>
</template>


<script>
import { ref, onUnmounted } from 'vue'
import { db } from '../main'
import firebase from 'firebase/compat/app'

export default{
    setup() {
        const tasksCollection = db.collection('tasks')
        const tasks =ref([]);
       
        const userid = firebase.auth().currentUser.uid
       // const userid = "fsdfsd"
        const getTasks = tasksCollection.where("userUid", "==", userid)
        .onSnapshot(snapshot => {
            tasks.value = snapshot.docs.map(doc => ({
                id: doc.id, ...doc.data()
            }))
        })
        onUnmounted(getTasks);
        
        const updateTaskCompletion = (taskId) => {
            tasksCollection.doc(taskId).get().then(doc => {
                if (doc.exists) {
                    doc.ref.update({
                        completed: !doc.data().completed,
                    }).then(() => {
                        console.log('Completion status of task has been successfully updated!')
                    }).catch(error => {
                        console.log('Error updating completion status: ', error)
                    })
                } else {
                    console.log('No such document!')
                }
            }).catch(error => {
                console.log('Error getting document: ', error)
            })
        }

        const deleteTask = (taskId) => { tasksCollection.doc(taskId).get().then(doc => {
                if (doc.exists) {
                    doc.ref.delete().then(() => {
                        console.log('Document deleted successfully!')
                    }).catch(error => {
                        console.log('Deletion unsuccessfull: ', error)
                    })
                } else {
                    console.log('No such document')
                }
            }).catch(error => {
                console.log('error getting document: ', error)
            })
        }



        return{
            tasks,
            updateTaskCompletion,
            deleteTask,
        }
   }
}
</script>

<style>
.tasksList td.description {
    cursor: pointer;
}
.completed {
    text-decoration: line-through;
}
</style>