// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6O_RPDkcCciSyUMhuplVh-kXBYu6f060",
  authDomain: "twitter-clone-19b3c.firebaseapp.com",
  projectId: "twitter-clone-19b3c",
  storageBucket: "twitter-clone-19b3c.appspot.com",
  messagingSenderId: "400317134524",
  appId: "1:400317134524:web:6889b3c9e5707b217142b9",
  measurementId: "G-QZM8K6BEV5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);