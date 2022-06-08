import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/compat/app';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBUoLN10KYStgQWXxJhIpq-7rutUh2VPqU",
  authDomain: "weight-app-51424.firebaseapp.com",
  projectId: "weight-app-51424",
  storageBucket: "weight-app-51424.appspot.com",
  messagingSenderId: "199241052799",
  appId: "1:199241052799:web:6864fd5d7a0ceacc68854a",
  measurementId: "G-C5N0EJ3B9N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const measuresColRef = collection(db, 'measures');

export { auth, db, };
export default measuresColRef;

createApp(App).use(router).mount('#app')
