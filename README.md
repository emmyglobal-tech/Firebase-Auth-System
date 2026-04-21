# Firebase-Auth-System
🔐 Firebase Authentication System

A complete user authentication system built with Firebase, allowing users to create accounts, log in, and access a protected dashboard.

🚀 Features
User Sign Up (Create Account)
User Login
Protected Dashboard (only accessible when logged in)
Firebase Authentication (Email & Password)
Logout functionality
Real-time user session handling
🛠️ Technologies Used
HTML5
CSS3
JavaScript (ES6 Modules)
Firebase Authentication (v9+ Modular SDK)
📁 Project Structure
MY PROJECT/
 └── FIREBASE/
      ├── index.html        (Login Page)
      ├── signup.html       (Create Account Page)
      ├── dashboard.html    (Protected Page)
      ├── firebase.js       (Firebase config & initialization)
      ├── auth.js           (Login, signup, logout logic)
      ├── style.css         (UI styling)
🔧 Setup Instructions
1. Clone the repository
git clone https://github.com/yourusername/firebase-auth-system.git
2. Open project folder
cd firebase-auth-system
3. Configure Firebase
Go to Firebase Console
Create a project
Enable Email/Password Authentication
Copy your Firebase config
Paste it inside firebase.js
▶️ How It Works
1. Sign Up

Users create an account using email and password.

2. Login

Registered users log in using their credentials.

3. Dashboard Access

Only authenticated users can access dashboard.html.

4. Logout

Users can securely log out from the dashboard.

🔒 Security Rule

The dashboard is protected using Firebase Auth state check:

If user is NOT logged in → redirected to login page
If user IS logged in → dashboard is accessible
📌 Future Improvements
Password reset feature
Google login authentication
User profile page
Database storage (Firestore)
👨‍💻 Author

Emmanuel Chukwuma
