import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUzosu9XehrRP7AXfUwYUGuUcoHuIfYc8",
  authDomain: "personal-portfolio-19.firebaseapp.com",
  projectId: "personal-portfolio-19",
  storageBucket: "personal-portfolio-19.firebasestorage.app",
  messagingSenderId: "506341297172",
  appId: "1:506341297172:web:8055523d2b6dfb739eab01",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };