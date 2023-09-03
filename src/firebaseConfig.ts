// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrsBk70YYMDTILrjaEhsamxB8wZ1zPi-M",
    authDomain: "sdfootballnews.firebaseapp.com",
    projectId: "sdfootballnews",
    storageBucket: "sdfootballnews.appspot.com",
    messagingSenderId: "134577226738",
    appId: "1:134577226738:web:f9b18b14394e51563b216b",
    measurementId: "G-8J9FZ5E376"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);