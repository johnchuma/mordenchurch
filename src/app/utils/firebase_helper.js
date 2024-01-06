// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore}  from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA0zBpuiaLpzLiCbwau_chKIQbXhvQn-I4",
  authDomain: "morden-church.firebaseapp.com",
  projectId: "morden-church",
  storageBucket: "morden-church.appspot.com",
  messagingSenderId: "934596909495",
  appId: "1:934596909495:web:76cce9eab40f6d54bb7032",
  measurementId: "G-81MQ80LXTL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app)