// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: "service-review-60bc2",
  storageBucket: "service-review-60bc2.appspot.com",
  messagingSenderId: "459861275859",
  appId: "1:459861275859:web:a586eddfd4dbd70edc9026"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);