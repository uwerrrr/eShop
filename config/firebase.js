// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDakZI0eBW4dvkuTjaBAsd41ukZYi2_x8s",
  authDomain: "eshop-7c255.firebaseapp.com",
  projectId: "eshop-7c255",
  storageBucket: "eshop-7c255.appspot.com",
  messagingSenderId: "350864684227",
  appId: "1:350864684227:web:003a25886bf244f6961e76",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
