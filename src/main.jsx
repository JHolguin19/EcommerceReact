import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJDGX56GeADu2TfujfRhAiuKxq1naPHOI",
  authDomain: "holguinproyect.firebaseapp.com",
  projectId: "holguinproyect",
  storageBucket: "holguinproyect.appspot.com",
  messagingSenderId: "365725808735",
  appId: "1:365725808735:web:8423b444552f182c2383ea",
  measurementId: "G-V9TVW6L7SC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


ReactDOM.createRoot(document.getElementById('root')).render(<App />)
