import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDKRvDaIsaQ0YTZDxzaN_3AfKFC14rjSpA",
    authDomain: "messageapp-react.firebaseapp.com",
    projectId: "messageapp-react",
    storageBucket: "messageapp-react.appspot.com",
    messagingSenderId: "515670165335",
    appId: "1:515670165335:web:31bcd6e636547fe08aa012"
  }).auth();

  