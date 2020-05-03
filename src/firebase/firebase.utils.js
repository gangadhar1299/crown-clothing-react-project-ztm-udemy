import firebase, { firestore } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBxshojMqUJIGy1IZESRsvudBnZstL7ypc",
    authDomain: "crown-clothing-database-1a1b1c.firebaseapp.com",
    databaseURL: "https://crown-clothing-database-1a1b1c.firebaseio.com",
    projectId: "crown-clothing-database-1a1b1c",
    storageBucket: "crown-clothing-database-1a1b1c.appspot.com",
    messagingSenderId: "140526142873",
    appId: "1:140526142873:web:944b59216a065650d0ff08",
    measurementId: "G-YYMDNNSSGZ"
}

firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;