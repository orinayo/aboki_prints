import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBapUMseIVGYHd4GVqyOn0_6dGsbi3DGAo',
  authDomain: 'aboki-printsdb.firebaseapp.com',
  databaseURL: 'https://aboki-printsdb.firebaseio.com',
  projectId: 'aboki-printsdb',
  storageBucket: 'aboki-printsdb.appspot.com',
  messagingSenderId: '276550494310',
  appId: '1:276550494310:web:679e2ea96716242d62a5a7',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

