// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuMmH_ufrhjrS8ciW-j-PbFJ_JGA8LFL4",
  authDomain: "doctors-portal-5c060.firebaseapp.com",
  projectId: "doctors-portal-5c060",
  storageBucket: "doctors-portal-5c060.appspot.com",
  messagingSenderId: "82075293464",
  appId: "1:82075293464:web:8048854d19dbf41caef06d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;