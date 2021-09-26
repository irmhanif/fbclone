import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyADdGdAX3AzVvPniyrlotP6A1tdXpN_04M",
  authDomain: "fbclone-8aea8.firebaseapp.com",
  projectId: "fbclone-8aea8",
  storageBucket: "fbclone-8aea8.appspot.com",
  messagingSenderId: "1011746548317",
  appId: "1:1011746548317:web:a3f4ec29a50f08b29f7bb4",
  measurementId: "G-K31ZV27QSD",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
