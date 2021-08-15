import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDwVTNlIN1sOk-iHfBRoG8WuKM3_DWNieU",
    authDomain: "mimi-wears.firebaseapp.com",
    projectId: "mimi-wears",
    storageBucket: "mimi-wears.appspot.com",
    messagingSenderId: "240037357153",
    appId: "1:240037357153:web:77c1e02d41dfffa2806c20",
    measurementId: "G-TMQN47BWTV"
}

firebase.initializeApp(config);
// !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()


export const createUserProfileDocument = async (userAuth, data) => {
    if (!userAuth) return null;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName, email, createdAt, ...data
            })
        } catch (err) {
            console.log("error creating user", err.message)
        }
    }

    return userRef
    // console.log(firestore.doc('users/27jfhffg'))
}



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


