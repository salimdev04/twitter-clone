// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
import { getAnalytics } from "@firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm1bZN5dDEtYkRgJ8iPyY4_rkNV82jxVM",
  authDomain: "twitter-clone-ca165.firebaseapp.com",
  projectId: "twitter-clone-ca165",
  storageBucket: "twitter-clone-ca165.appspot.com",
  messagingSenderId: "811796808553",
  appId: "1:811796808553:web:f2730a2575e2876e13f3f8",
  measurementId: "G-P6QH9SC5LV",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
//const analytics = getAnalytics(app);

export default app;
export { db, storage };
