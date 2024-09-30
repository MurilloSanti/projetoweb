// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQPiy8MQacNI-gYqxUfzvgajSo-V66qUk",
  authDomain: "desenvolvimento-web-3eb10.firebaseapp.com",
  projectId: "desenvolvimento-web-3eb10",
  storageBucket: "desenvolvimento-web-3eb10.appspot.com",
  messagingSenderId: "924774858631",
  appId: "1:924774858631:web:303591065f5a6d1085dd22",
  measurementId: "G-5T1DW0741P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);