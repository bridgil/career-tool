
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBev76ygMa0Zl9pzyYipTzKOVxqi_woeuw",
  authDomain: "bridgil-ac3d0.firebaseapp.com",
  projectId: "bridgil-ac3d0",
  storageBucket: "bridgil-ac3d0.firebasestorage.app",
  messagingSenderId: "508955847723",
  appId: "1:508955847723:web:d705ff7d4875d3ebbb4e6e",
  measurementId: "G-E785NPSP9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
