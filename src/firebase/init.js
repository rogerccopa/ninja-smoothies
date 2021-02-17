import firebase from 'firebase/app'
// eslint-disable-next-line no-unused-vars (this is a ESLint directive)
import firestore from 'firebase/firestore'

// Initialize our Firebase App: udemy-ninja-smoothies-webapp
const firebaseConfig = {
    apiKey: "AIzaSyAAe1aA6AV3YUPPNTIdecRmh3LbrIKkj7s",
    authDomain: "udemy-ninja-smoothies-4441f.firebaseapp.com",
    databaseURL: "https://udemy-ninja-smoothies-4441f-default-rtdb.firebaseio.com",
    projectId: "udemy-ninja-smoothies-4441f",
    storageBucket: "udemy-ninja-smoothies-4441f.appspot.com",
    messagingSenderId: "217084390974",
    appId: "1:217084390974:web:d4c003ff700a4492c2eb6f"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({timestampsInSnapshots:true});

export default firebaseApp.firestore();
