// Conveniently import this file anywhere to use db



// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";

import { initializeApp, } from "firebase/app";
import { getAnalytics, } from "firebase/analytics";
import {getFirestore, }  from 'firebase/firestore' ;
import * as firestore from 'firebase/firestore' ;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  };
/// Initialize Firebase

const app = initializeApp(firebaseConfig, {
    automaticDataCollectionEnabled: true,
    name: 'csc-db'
});
const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service

const db = getFirestore(app);
//todo export all of firebase imports at least the important ones
export default db;
export { app, analytics, firebase, firestore };