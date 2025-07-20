// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAyHjcP2xbiv6FqxGT8bWQI-RkttS1LekA",
  authDomain: "globalsim-80108.firebaseapp.com",
  projectId: "globalsim-80108",
  storageBucket: "globalsim-80108.firebasestorage.app",
  messagingSenderId: "577978389706",
  appId: "1:577978389706:web:ffb307cf23a00237da1033",
  measurementId: "G-KJV1E1ZL71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Set persistent login
setPersistence(auth, browserLocalPersistence)
  .then(() => console.log("Persistence set"))
  .catch((error) => console.error("Persistence error", error));

// Make functions global for HTML usage
window.auth = auth;
window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;
window.onAuthStateChanged = onAuthStateChanged;
window.signOut = signOut;

