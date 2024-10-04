


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // For Firestore
import { getAnalytics, logEvent } from "firebase/analytics"; // For Analytics
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_Eg3xemjBuGjfuAhuERiTL-2Dzeeh9n8",
  authDomain: "emmascooters-b5b76.firebaseapp.com",
  projectId: "emmascooters-b5b76",
  storageBucket: "emmascooters-b5b76.appspot.com",
  messagingSenderId: "757455099081",
  appId: "1:757455099081:web:aef4072dd69254372b2918",
  measurementId: "G-T2Y9M8F0CH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Analytics only if in production
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
  
  // You can log custom events if needed
  logEvent(analytics, 'notification_received');
}

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Google Auth Provider for Google Sign-In
export const googleProvider = new GoogleAuthProvider();

export { analytics };






/*

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_Eg3xemjBuGjfuAhuERiTL-2Dzeeh9n8",
  authDomain: "emmascooters-b5b76.firebaseapp.com",
  projectId: "emmascooters-b5b76",
  storageBucket: "emmascooters-b5b76.appspot.com",
  messagingSenderId: "757455099081",
  appId: "1:757455099081:web:aef4072dd69254372b2918",
  measurementId: "G-T2Y9M8F0CH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

*/