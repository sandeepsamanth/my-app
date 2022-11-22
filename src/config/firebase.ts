// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADIMUNHc3TtUq8Kr384WvifyntQzOByAc",
  authDomain: "react-cource-13d9d.firebaseapp.com",
  projectId: "react-cource-13d9d",
  storageBucket: "react-cource-13d9d.appspot.com",
  messagingSenderId: "22037957755",
  appId: "1:22037957755:web:174f119fce84f2d53a66de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const provider=new GoogleAuthProvider;
export const db = getFirestore(app);