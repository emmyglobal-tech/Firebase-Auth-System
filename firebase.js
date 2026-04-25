
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// 1. Added the Firestore import
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBFSIqcnP5U0CMjQZtIS3jK5VTVcHGLPRw",
  authDomain: "client-cc4df.firebaseapp.com",
  projectId: "client-cc4df",
  storageBucket: "client-cc4df.firebasestorage.app",
  messagingSenderId: "600063857476",
  appId: "1:600063857476:web:9abfe8219251f56e67fd11",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// 2. Exported the database (db) so the Admin Panel can use it
export const db = getFirestore(app);
