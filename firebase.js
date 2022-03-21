import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjGYqJqbuBSDRbGN7fUgfoW1klAAYvR3c",
  authDomain: "whatsapp-clone-5fc44.firebaseapp.com",
  projectId: "whatsapp-clone-5fc44",
  storageBucket: "whatsapp-clone-5fc44.appspot.com",
  messagingSenderId: "126356753971",
  appId: "1:126356753971:web:ce430942127bca755d1d46"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0 ){
    app = firebase.initializeApp(firebaseConfig)
}
else{
    app = firebase.app()
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };