// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApfdn22KNy6oOu0sAHKm6l4EayzMDg2I8",
  authDomain: "vrpo03-system.firebaseapp.com",
  projectId: "vrpo03-system",
  storageBucket: "vrpo03-system.firebasestorage.app",
  messagingSenderId: "682338394615",
  appId: "1:682338394615:web:75d3a4dd2912c271138ef2",
  measurementId: "G-B99JT7XC44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
