import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDf2GqMR4beUSgYnWfFWfAyjtvL7kANOAQ",
    authDomain: "cv-world-29cc6.firebaseapp.com",
    projectId: "cv-world-29cc6",
    storageBucket: "cv-world-29cc6.appspot.com",
    messagingSenderId: "447059758809",
    appId: "1:447059758809:web:7a978701be3cec72eff8c8"
  };
  
  const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };