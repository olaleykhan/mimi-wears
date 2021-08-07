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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ promt: "please choose account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


