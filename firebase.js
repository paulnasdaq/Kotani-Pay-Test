// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const {getFirestore} = require( "firebase/firestore/lite");

const firebaseConfig = {
    apiKey: "AIzaSyBmPFmsSz-iIahBAsojYRINjYijtjT3jog",
    authDomain: "kotani-pay-e4c2e.firebaseapp.com",
    projectId: "kotani-pay-e4c2e",
    storageBucket: "kotani-pay-e4c2e.appspot.com",
    messagingSenderId: "829448665032",
    appId: "1:829448665032:web:d7ad0a7b264d9dc736b2fd",
    measurementId: "G-B58FG55D4H"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

module.exports.db = db