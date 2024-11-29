import { TwitterAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "./firebaseConfig";

export async function handleTwitterAuth() {
  const provider = new TwitterAuthProvider();
  const auth = getAuth(app);

  try {
    const result = await signInWithPopup(auth, provider);
    const credential = TwitterAuthProvider.credentialFromResult(result);
    const user = result.user;
    return { user, credential };
  } catch (error) {
    return { error: error.message };
  }
}
