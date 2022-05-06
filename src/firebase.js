import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyBmJAhuqGBHZ5AHBa9tZZufLfCyI6T16JM",
    authDomain: "chatapp-d9770.firebaseapp.com",
    projectId: "chatapp-d9770",
    storageBucket: "chatapp-d9770.appspot.com",
    messagingSenderId: "149540755840",
    appId: "1:149540755840:web:2b65731fe41b78a842c965"
  }).auth();