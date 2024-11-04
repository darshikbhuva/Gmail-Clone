// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYGG3Fwiw-PVYrsUJdLF9o-I2U-499RLc",
  authDomain: "clone-9fb22.firebaseapp.com",
  projectId: "clone-9fb22",
  storageBucket: "clone-9fb22.firebasestorage.app",
  messagingSenderId: "819734473614",
  appId: "1:819734473614:web:046e4c9c4b4e33d9d952df",
  measurementId: "G-EX9WEDBWF4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
