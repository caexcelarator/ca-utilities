import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBZd7IB2v6rzYTuzCvMeit0RgA4g3OUT8g",
  authDomain: "ca-utilities.firebaseapp.com",
  projectId: "ca-utilities",
  storageBucket: "ca-utilities.firebasestorage.app",
  messagingSenderId: "872582350596",
  appId: "1:872582350596:web:05b0e8dc4526ecc819b251"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();