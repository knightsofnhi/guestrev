import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDlG_2mmn3G-piZe_a7sT1P0gnNR2M-izI",
    authDomain: "guestrev-pro.firebaseapp.com",
    databaseURL: "https://guestrev-pro.firebaseio.com",
    projectId: "guestrev-pro",
    storageBucket: "",
    messagingSenderId: "1057687592034"
};
export const firebaseApp = firebase.initializeApp(config);
export const users = firebaseApp.database().ref().child('users');
export const usersWishlist = firebaseApp.database().ref().child('usersWishlist');