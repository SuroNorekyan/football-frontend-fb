// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6tBwOW2sCidpK3dszgA-A_3UmrFzNuDQ",
  authDomain: "footballnews-sd.firebaseapp.com",
  projectId: "footballnews-sd",
  storageBucket: "footballnews-sd.appspot.com",
  messagingSenderId: "686610009808",
  appId: "1:686610009808:web:f16c8ff7a11e1d88bc58d5",
  measurementId: "G-893H4XM2G9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
