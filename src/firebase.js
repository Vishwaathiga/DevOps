
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXOsXN72pSnPz3oe3rEt4BUC4BvlCTPAc",
  authDomain: "portfolio-b13cc.firebaseapp.com",
  projectId: "portfolio-b13cc",
  storageBucket: "portfolio-b13cc.firebasestorage.app",
  messagingSenderId: "566949881013",
  appId: "1:566949881013:web:cec296bf6d58d9817acafc",
  measurementId: "G-9WG6GZ1M3J"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
