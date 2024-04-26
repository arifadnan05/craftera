// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUnIsfNcFo8GUGVsibDZPBInDoP7BWJuI",
  authDomain: "craftera-29a5a.firebaseapp.com",
  projectId: "craftera-29a5a",
  storageBucket: "craftera-29a5a.appspot.com",
  messagingSenderId: "1067646361734",
  appId: "1:1067646361734:web:7eab702472e07cd46db107"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;