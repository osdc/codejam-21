import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAz0PRAQR5kohAl5pkcvGYxdneGUweNess",
  authDomain: "fundneedy-1289c.firebaseapp.com",
  projectId: "fundneedy-1289c",
  storageBucket: "fundneedy-1289c.appspot.com",
  messagingSenderId: "558778461652",
  appId: "1:558778461652:web:620324cbe396ddc218fa41",
  measurementId: "G-1GWELNXSBK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
