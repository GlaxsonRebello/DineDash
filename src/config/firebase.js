import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCl4JYdptoYTGzfU7w1-sSuiWkFo6fS21Q",
  authDomain: "dinedash-86cde.firebaseapp.com",
  databaseURL: "https://dinedash-86cde-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dinedash-86cde",
  storageBucket: "dinedash-86cde.appspot.com",
  messagingSenderId: "693718503854",
  appId: "1:693718503854:web:ca9015c0bf0c1ca0c4783f",
  measurementId: "G-PKLEEH4DD6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
