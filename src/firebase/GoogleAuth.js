import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { app } from "./firebaseConfig";

export function handleGoogleAuth() {
  const provider = new GoogleAuthProvider();

  const auth = getAuth(app);

  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log({ user, token });
      return { user, token };
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log({ errorCode, errorMessage, email, credential });
      return { errorCode, errorMessage, email, credential };
    });
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
