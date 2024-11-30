import { setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export async function handleSaveHistory(history) {
  const userID = sessionStorage.getItem("userID");
  const data = await setDoc(db, `users/${userID}/history`, history);
  return data;
}
