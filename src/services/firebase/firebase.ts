// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { Auth, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDycbx1npsekWngJxhSNYJl2k_YnD20D28",
    authDomain: "eurocompare.firebaseapp.com",
    projectId: "eurocompare",
    storageBucket: "eurocompare.appspot.com",
    messagingSenderId: "187906898120",
    appId: "1:187906898120:web:382f384aea37ca11664dfd",
    measurementId: "G-KKDF77ZF4R",
    databaseURL:
        "https://eurocompare-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const analytics: Analytics = getAnalytics(app);
const auth: Auth = getAuth(app);

export { app, auth, firebaseConfig };
