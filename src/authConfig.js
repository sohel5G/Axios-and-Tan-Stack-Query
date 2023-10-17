import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import 'dotenv/config'

const firebaseConfig = {
    apiKey: "AIzaSyDQXng7fafpELFF7ILu4ywZvd2Bso7zpCo",
    authDomain: "coffee-store-4827b.firebaseapp.com",
    projectId: "coffee-store-4827b",
    storageBucket: "coffee-store-4827b.appspot.com",
    messagingSenderId: "151006226076",
    appId: "1:151006226076:web:91c39f9c8c8bcf1e8b2f59"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

