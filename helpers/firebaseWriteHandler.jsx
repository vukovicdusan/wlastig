import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../public/firebase/firebase";

export const firebaseWriteHandler = async (data) => {
  await setDoc(doc(db, "clients", data.email + " - " + data.type), {
    name: data.name,
    email: data.email,
    website: data.website,
    comments: data.comments,
    type: data.type,
    created_at: serverTimestamp(),
  });
};
