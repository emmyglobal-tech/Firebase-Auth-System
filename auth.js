import { auth, db } from "./firebase.js"; 
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
  signOut 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export const startSignup = async (email, username, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, { displayName: username });
    await sendEmailVerification(user);

    // Save to Firestore so Admin can see them
    try {
      await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: email,
        uid: user.uid,
        status: "Verified",
        role: "user",
        createdAt: serverTimestamp()
      });
    } catch (dbErr) { console.error("DB Sync error:", dbErr); }

    alert("Registration successful! Verify your email before logging in.");
    window.location.href = "login.html";
  } catch (error) {
    alert("Signup Error: " + error.message);
  }
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (user.emailVerified) {
      // If verified, go to dashboard. The dashboard handles the Admin redirect.
      window.location.href = "dashboard.html";
    } else {
      alert("Please verify your email first.");
      await signOut(auth);
    }
  } catch (error) {
    alert("Login Error: " + error.message);
  }
};

export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Reset link sent!");
  } catch (error) { alert(error.message); }
};

export const logoutUser = async () => {
  await signOut(auth);
  window.location.href = "login.html";
};
