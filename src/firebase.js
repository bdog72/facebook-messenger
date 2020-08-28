//
//

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyC862vUu2tGoI3Y_Y5vL5cth3SJWrQiw54',
  authDomain: 'facebook-messenger-clone-f83b9.firebaseapp.com',
  databaseURL: 'https://facebook-messenger-clone-f83b9.firebaseio.com',
  projectId: 'facebook-messenger-clone-f83b9',
  storageBucket: 'facebook-messenger-clone-f83b9.appspot.com',
  messagingSenderId: '246894360613',
  appId: '1:246894360613:web:613b5718726ad8e92da7cc',
});

const db = firebaseApp.firestore();

export default db;
