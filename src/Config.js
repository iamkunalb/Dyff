import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCqt4V-1hqYYBTJVDnGEnQm_kfOdcFF_rE",
    authDomain: "dyff-eb7e7.firebaseapp.com",
    databaseURL: "https://dyff-eb7e7.firebaseio.com",
    projectId: "dyff-eb7e7",
    storageBucket: "dyff-eb7e7.appspot.com",
    messagingSenderId: "1026687655135",
    appId: "1:1026687655135:web:894861886f1e8993e49d6a",
    measurementId: "G-566L824TJ5"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();