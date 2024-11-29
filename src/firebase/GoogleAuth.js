import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { app } from "./firebaseConfig";

export async function handleGoogleAuth() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    return { user, credential };
  } catch (error) {
    console.log(error.message);
  }
}

export function handleGoogleLogout() {
  const auth = getAuth(app);
  signOut(auth)
    .then(() => {
      console.log("User signed out.");
    })
    .catch((error) => {
      console.log("Error signing out:", error);
    });
}
