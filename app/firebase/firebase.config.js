// Import the functions you need from the SDKs you need
import exp from "constants";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSdDoZt67VplHXhWzcaEPMBbnEEGC6bSM",
  authDomain: "all-paws-matter.firebaseapp.com",
  projectId: "all-paws-matter",
  storageBucket: "all-paws-matter.appspot.com",
  messagingSenderId: "662454584352",
  appId: "1:662454584352:web:b2007c3f9601351912e845"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;