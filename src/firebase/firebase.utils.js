import firebase from 'firebase/app';
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

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`/users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({ displayName, email, createdAt, ...additionalData });
        } catch (error) {
            console.log("Error creating user ", error);
        }
    }

    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;