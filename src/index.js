import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoXQVtd-R2LOvfyRPx9EGtn8ZwdM6mxlI",
  authDomain: "cart1-106ae.firebaseapp.com",
  projectId: "cart1-106ae",
  storageBucket: "cart1-106ae.appspot.com",
  messagingSenderId: "528671542049",
  appId: "1:528671542049:web:4d5e0dc6af3c5397cd8c60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.render(<App />, document.getElementById('root'));
