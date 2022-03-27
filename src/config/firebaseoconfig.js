import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/analytics'
// import { initializeApp } from "firebase/";
const firebaseConfig = {
  apiKey: "AIzaSyBZFH3Fih1zJGjCCmoxNumjtYcCaDvRFFg",
  authDomain: "react-login-2cd54.firebaseapp.com",
  projectId: "react-login-2cd54",
  storageBucket: "react-login-2cd54.appspot.com",
  messagingSenderId: "168468171120",
  appId: "1:168468171120:web:6b5c14c02bc4dc4ce727b5"
}; 
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig)
firebase.analytics();
export default firebase