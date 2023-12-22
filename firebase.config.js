/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC9e0Cq4P_AfFlKpfKXkS5CCVWtys8ugk",
  authDomain: "sst65-1599d.firebaseapp.com",
  projectId: "sst65-1599d",
  storageBucket: "sst65-1599d.appspot.com",
  messagingSenderId: "392520833835",
  appId: "1:392520833835:web:ec67d415745bc94610c36e",
  measurementId: "G-N9R7C44HVF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
