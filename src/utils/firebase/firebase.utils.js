import { initializeApp } from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA_AzJmItV3YU5cLqoz8zmgiTyX5i_4boE",
    authDomain: "crwn-clothing-db-fd040.firebaseapp.com",
    projectId: "crwn-clothing-db-fd040",
    storageBucket: "crwn-clothing-db-fd040.appspot.com",
    messagingSenderId: "730130372431",
    appId: "1:730130372431:web:08fc77702e9edec658173a"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);