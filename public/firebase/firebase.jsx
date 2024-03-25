import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API,
  authDomain: "wlastig-website.firebaseapp.com",
  projectId: "wlastig-website",
  storageBucket: "wlastig-website.appspot.com",
  messagingSenderId: "342348332776",
  appId: "1:342348332776:web:9b264a48a15b2d35ab935d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
