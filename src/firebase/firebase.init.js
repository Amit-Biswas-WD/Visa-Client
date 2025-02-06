import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoiLLWpap5lycsjN4dT2SlqkXwtEahy8o",
  authDomain: "visa-portal-417e0.firebaseapp.com",
  projectId: "visa-portal-417e0",
  storageBucket: "visa-portal-417e0.firebasestorage.app",
  messagingSenderId: "957995278545",
  appId: "1:957995278545:web:3edf263e7c1f3b9b0c65f0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;