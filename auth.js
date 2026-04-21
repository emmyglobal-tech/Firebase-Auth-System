// auth.js

import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

export const signUpUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("User created:", userCredential.user);
    window.location.href = "dashboard.html";
  } catch (error) {
    alert(error.message);
  }
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("User logged in:", userCredential.user);
    window.location.href = "dashboard.html";
  } catch (error) {
    alert(error.message);
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
    window.location.href = "index.html";
  } catch (error) {
    alert(error.message);
  }
};

export const initAuthListener = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Logged in:", user.email);
    } else {
      console.log("Not logged in");
    }
  });
};
