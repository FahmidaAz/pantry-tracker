import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyC3dHpy0SGBw7iNL8rnP_GfLsklohnLLWg",
    authDomain: "hspantrytracker-4a4e0.firebaseapp.com",
    projectId: "hspantrytracker-4a4e0",
    storageBucket: "hspantrytracker-4a4e0.appspot.com",
    messagingSenderId: "672636278670",
    appId: "1:672636278670:web:809b18f2c9febb0bb076df"
 };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };