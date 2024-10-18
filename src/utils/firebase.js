// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5FgbyhwxIhEjNtekFPIs2O_XEbtGRr5Y",
  authDomain: "netflix-clone-a363d.firebaseapp.com",
  projectId: "netflix-clone-a363d",
  storageBucket: "netflix-clone-a363d.appspot.com",
  messagingSenderId: "1025074155653",
  appId: "1:1025074155653:web:134e1892f180300bd899ec",
  measurementId: "G-E94STQKCD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
