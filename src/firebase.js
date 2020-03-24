import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBxkogPPAyk3tu3g8NrjvX56m0NX0F60v0",
  authDomain: "bt3103-160a7.firebaseapp.com",
  databaseURL: "https://bt3103-160a7.firebaseio.com",
  projectId: "bt3103-160a7",
  storageBucket: "bt3103-160a7.appspot.com",
  messagingSenderId: "1016986219907",
  appId: "1:1016986219907:web:4aad915387aee8fb6372b6",
  measurementId: "G-HJ2V5K8NK5"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;
