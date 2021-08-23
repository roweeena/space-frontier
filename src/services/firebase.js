import firebase from 'firebase';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyB-TA5H7UM0niyP9RHEfU6BrOX_s-x2nUs",
    authDomain: "space-comp.firebaseapp.com",
    projectId: "space-comp",
    storageBucket: "space-comp.appspot.com",
    // databaseURL: "https://sweet-sweat-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

firebase.initializeApp(config);
export const auth = firebase.auth;
export const fsDb = firebase.firestore();