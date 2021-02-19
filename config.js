import firebase from 'firebase'
require ('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyC4xaoVY-ymPSwCMCQVIzADOhgSftnOhfI",
    authDomain: "book-santa-bcd8d.firebaseapp.com",
    projectId: "book-santa-bcd8d",
    storageBucket: "book-santa-bcd8d.appspot.com",
    messagingSenderId: "716606166704",
    appId: "1:716606166704:web:df2a7ad76cf576a4f34d75"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore()