// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyHjcP2xbiv6FqxGT8bWQI-RkttS1LekA",
  authDomain: "globalsim-80108.firebaseapp.com",
  projectId: "globalsim-80108",
  storageBucket: "globalsim-80108.appspot.com",
  messagingSenderId: "577978389706",
  appId: "1:577978389706:web:ffb307cf23a00237da1033",
  measurementId: "G-KJV1E1ZL71"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);