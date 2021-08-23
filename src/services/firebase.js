import firebase from 'firebase';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyAa1gke4GYFuWWHRBXF3aiGd3U2174z8hE",
    authDomain: "space-comp-comercial.firebaseapp.com",
    projectId: "space-comp-comercial",
    storageBucket: "space-comp-comercial.appspot.com",
};

firebase.initializeApp(config);
export const auth = firebase.auth;
export const fsDb = firebase.firestore();