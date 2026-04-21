import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBFSIqcnP5U0CMjQZtIS3jK5VTVcHGLPRw",
  authDomain: "client-cc4df.firebaseapp.com",
  projectId: "client-cc4df",
  storageBucket: "client-cc4df.firebasestorage.app",
  messagingSenderId: "600063857476",
  appId: "1:600063857476:web:9abfe8219251f56e67fd11",
  measurementId: "G-MNM99NCKH9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// ✅ THIS IS WHAT YOU WERE MISSING
export { auth };