// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASBiiJxcz3_r9jZRCGY4qnn-EgPGf-ATU",
  authDomain: "studybreak-ea664.firebaseapp.com",
  projectId: "studybreak-ea664",
  storageBucket: "studybreak-ea664.firebasestorage.app",
  messagingSenderId: "625552373937",
  appId: "1:625552373937:web:1c5cb105cf1cee138f4a90",
  measurementId: "G-6GS50R6153"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Accesso tramite Google
export const auth= getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);