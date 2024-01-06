const { auth } = require("../utils/firebase_helper")
import {GoogleAuthProvider,signInWithPopup,signInWithRedirect} from "firebase/auth"

export const login = ()=>{
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
}


