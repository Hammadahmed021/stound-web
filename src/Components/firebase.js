// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiM-Wf1kpX4urdLekdjuSjGQSIqB8dVm8",
  authDomain: "stound-adfdb.firebaseapp.com",
  databaseURL: "https://stound-adfdb-default-rtdb.firebaseio.com",
  projectId: "stound-adfdb",
  storageBucket: "stound-adfdb.appspot.com",
  messagingSenderId: "925607838451",
  appId: "1:925607838451:web:1dc4fe80825fb166da6d86",
  measurementId: "G-Q37VE0TQ2P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
 
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  signOut(auth);

};

export { auth, sendPasswordReset, logout };
