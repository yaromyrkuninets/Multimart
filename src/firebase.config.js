import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC7LEss4uZ1x1VfhGtSmE7i8YYMhrWwKfI",
    authDomain: "multimart-abda9.firebaseapp.com",
    projectId: "multimart-abda9",
    storageBucket: "multimart-abda9.appspot.com",
    messagingSenderId: "329703063108",
    appId: "1:329703063108:web:fa1939d1b2d45d51760611"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;