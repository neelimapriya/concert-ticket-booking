// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANlKUACVmJPclj2aXuK9OKvp0ciCmAGI0",
  authDomain: "star-box-ticket.firebaseapp.com",
  projectId: "star-box-ticket",
  storageBucket: "star-box-ticket.appspot.com",
  messagingSenderId: "435100711429",
  appId: "1:435100711429:web:e0c809920895c5b829fa6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;