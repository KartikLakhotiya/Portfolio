import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAUzosu9XehrRP7AXfUwYUGuUcoHuIfYc8",
  authDomain: "personal-portfolio-19.firebaseapp.com",
  projectId: "personal-portfolio-19",
  storageBucket: "personal-portfolio-19.firebasestorage.app",
  messagingSenderId: "506341297172",
  appId: "1:506341297172:web:8055523d2b6dfb739eab01",
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };