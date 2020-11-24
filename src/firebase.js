import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD-hWmwmeh7VUa6OtVRGk5YMlPWcLWG3Hw",
  authDomain: "clone-85133.firebaseapp.com",
  databaseURL: "https://clone-85133.firebaseio.com",
  projectId: "clone-85133",
  storageBucket: "clone-85133.appspot.com",
  messagingSenderId: "59542050499",
  appId: "1:59542050499:web:95289e2ce5c3b48d197476",
  measurementId: "G-L173WF6629",
});

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
