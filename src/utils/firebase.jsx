import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Authentication
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEG4wIF-x5aEBN7kur_Zpp0yO1iF6LIA0",
  authDomain: "libro-library-browser.firebaseapp.com",
  projectId: "libro-library-browser",
  storageBucket: "libro-library-browser.appspot.com",
  messagingSenderId: "41251371451",
  appId: "1:41251371451:web:94d4346a7ebf4c9e21ac9e",
  measurementId: "G-07G4KE9X5Q"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Auth Variables
export const auth = getAuth(app);