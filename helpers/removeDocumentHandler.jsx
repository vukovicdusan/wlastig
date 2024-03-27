import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../public/firebase/firebase";

export const removeDocumentHandler = async (document, id) => {
  try {
    await deleteDoc(doc(db, document, id));
  } catch (error) {
    console.log(error);
  }
};
