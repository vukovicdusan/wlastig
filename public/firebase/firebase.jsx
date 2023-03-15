import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API,
	authDomain: "wlastig-90451.firebaseapp.com",
	projectId: "wlastig-90451",
	storageBucket: "wlastig-90451.appspot.com",
	messagingSenderId: "847985533416",
	appId: "1:847985533416:web:c0d2d468a072e0130c045d",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
// export const auth = getAuth(app)
export const storage = getStorage(app)
