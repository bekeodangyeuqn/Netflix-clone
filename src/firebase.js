// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmRzgtCYKCEvgTM8g04ADUlY0CYKEUcyU",
  authDomain: "netfilx-clone-def12.firebaseapp.com",
  projectId: "netfilx-clone-def12",
  storageBucket: "netfilx-clone-def12.appspot.com",
  messagingSenderId: "851785394986",
  appId: "1:851785394986:web:de004ab121d3de1944cc53",
  measurementId: "G-55ZE74JVQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);