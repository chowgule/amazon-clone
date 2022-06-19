// import firebase from './firebase';



import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyARI5xYRZASipRBOuExNav8atyPqFZYM3I",
  authDomain: "challenge-b14a8.firebaseapp.com",
  projectId: "challenge-b14a8",
  storageBucket: "challenge-b14a8.appspot.com",
  messagingSenderId: "345562618803",
  appId: "1:345562618803:web:49d28f1281e6e4a5bd09c6",
  measurementId: "G-HS2LHBM9K1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

