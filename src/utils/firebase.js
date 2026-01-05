// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH_sKiXVooOsfFjFogXHaMDhqmO3t38js",
  authDomain: "netflixgpt-main.firebaseapp.com",
  projectId: "netflixgpt-main",
  storageBucket: "netflixgpt-main.firebasestorage.app",
  messagingSenderId: "817006215182",
  appId: "1:817006215182:web:3bdc2f8992dbadda10fc5f",
  measurementId: "G-B0NY6YDYG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();