import firebase from "firebase";
require("@firebase/firestore");


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyO2Esy-83ltjQ6HJaHcKtRZx288yKROA",
  authDomain: "e-ride-app-ce943.firebaseapp.com",
  projectId: "e-ride-app-ce943",
  storageBucket: "e-ride-app-ce943.appspot.com",
  messagingSenderId: "131615243151",
  appId: "1:131615243151:web:420033eb052cc35222e9fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);





firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


