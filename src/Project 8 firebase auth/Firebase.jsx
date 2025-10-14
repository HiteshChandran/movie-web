
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB5eChvQyWs_3_DlLKx-O6mJDNq0a98ET0",
  authDomain: "react-email-be0db.firebaseapp.com",
  projectId: "react-email-be0db",
  storageBucket: "react-email-be0db.firebasestorage.app",
  messagingSenderId: "936034065261",
  appId: "1:936034065261:web:5a21a6ff677b6ba15b1864"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)