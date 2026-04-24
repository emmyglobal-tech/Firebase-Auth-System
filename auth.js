import { auth } from "./firebase.js";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  signOut 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

/**
 * SIGNUP: Creates user, updates display name, and sends verification email.
 */
export const startSignup = async (email, username, password) => {
  try {
    // 1. Create the user
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // 2. Set the Username
    await updateProfile(userCredential.user, { displayName: username });

    // 3. Send Verification Email
    await sendEmailVerification(userCredential.user);

    alert("Registration successful! Please check your email and click the verification link before logging in.");
    window.location.href = "index.html";
  } catch (error) {
    console.error("Signup Error:", error.code);
    alert("Signup Error: " + error.message);
  }
};

/**
 * LOGIN: Authenticates user and checks if they verified their email.
 */
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Security check: Only allow entry if email is verified
    if (user.emailVerified) {
      window.location.href = "dashboard.html";
    } else {
      alert("Verification Pending: Please click the link sent to your email address.");
      // Log them out immediately so they don't stay in a half-logged-in state
      await signOut(auth);
    }
  } catch (error) {
    console.error("Login Error:", error.code);
    alert("Login Error: " + error.message);
  }
};

/**
 * SECURE LOGOUT: Ends the session and redirects to login.
 */
export const logoutUser = async () => {
  try {
    await signOut(auth);
    window.location.href = "login.html";
  } catch (error) {
    console.error("Logout Error:", error.message);
    alert("Could not log out. Please try again.");
  }
};
