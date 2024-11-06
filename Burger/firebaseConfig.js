// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBw3BO9LkAqnNiV20AqUSRp_eaESdeKh4",
  authDomain: "mivil-8e7ad.firebaseapp.com",
  projectId: "mivil-8e7ad",
  storageBucket: "mivil-8e7ad.firebasestorage.app",
  messagingSenderId: "270293667715",
  appId: "1:270293667715:web:2e420b05dc7ce39ccd70b6"
};

// Initialize Firebase
const appfirabase = initializeApp(firebaseConfig);
export default appfirabase