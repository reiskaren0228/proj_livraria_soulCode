import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB68nFYA4V_RrKjaAZXwSEBpVCVjdUd_C8",
  authDomain: "codetechlibrary.firebaseapp.com",
  projectId: "codetechlibrary",
  storageBucket: "codetechlibrary.appspot.com",
  messagingSenderId: "505127260162",
  appId: "1:505127260162:web:cd9b2af35bbc57ac2f171b",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
