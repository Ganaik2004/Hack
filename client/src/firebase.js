// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "hack-154d2.firebaseapp.com",
  projectId: "hack-154d2",
  storageBucket: "hack-154d2.appspot.com",
  messagingSenderId: "858326031163",
  appId: "1:858326031163:web:2b3090069122b8ccbef51e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);