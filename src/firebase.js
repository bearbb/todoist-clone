import "firebase/firestore";
import firebase from "firebase/app";
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyD8OZvTTm7el3G2IfXdz2I5QY6CBs9jkro",
  authDomain: "todoist-clone-7f040.firebaseapp.com",
  databaseURL: "https://todoist-clone-7f040.firebaseio.com",
  projectId: "todoist-clone-7f040",
  storageBucket: "todoist-clone-7f040.appspot.com",
  messagingSenderId: "318282154990",
  appId: "1:318282154990:web:8db8776d8836d5060ac4ff",
});
const db = firebase.firestore();
export { firebaseConfig as firebase, db };
