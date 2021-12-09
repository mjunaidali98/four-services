import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDS8QY6o_51D0ifrzT6Cqv3DHA71Xejlmo",
    authDomain: "four-services.firebaseapp.com",
    projectId: "four-services",
    storageBucket: "four-services.appspot.com",
    messagingSenderId: "925988965811",
    appId: "1:925988965811:web:e15093cf7a2e20e0394fc6",
    measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);