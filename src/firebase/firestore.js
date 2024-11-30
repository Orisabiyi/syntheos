import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export async function handleSaveHistory(history) {
  const docRef = doc(db, "history", history.userID);
  const docSnap = await getDoc(docRef);

  let data;
  // first time user
  if (!docSnap.exists()) {
    data = await setDoc(docRef, { history: [history] });
    return data;
  }

  // have existing data
  data = await updateDoc(docRef, {
    history: arrayUnion(history),
  });
  return true;
}
