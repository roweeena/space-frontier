import firebase from 'firebase';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyAa1gke4GYFuWWHRBXF3aiGd3U2174z8hE",
    authDomain: "space-comp-comercial.firebaseapp.com",
    projectId: "space-comp-comercial",
    storageBucket: "space-comp-comercial.appspot.com",
    messagingSenderId: "745451876275",
    appId: "1:745451876275:web:d5b6954425d0a72dfa65c6",
    measurementId: "G-QNJTE3ZCXQ"
};

firebase.initializeApp(config);
export const auth = firebase.auth;
export const fsDb = firebase.firestore();
export const firebaseAnalytics = firebase.analytics();