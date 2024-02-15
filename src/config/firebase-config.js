import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

  apiKey: "AIzaSyADR50FoBqacVPYMUV4k4yUi6oAFz-Tegc",

  authDomain: "jose-sanchez-f7aab.firebaseapp.com",

  projectId: "jose-sanchez-f7aab",

  storageBucket: "jose-sanchez-f7aab.appspot.com",

  messagingSenderId: "1008631423927",

  appId: "1:1008631423927:web:a3a77041e498a236e17e32",

  measurementId: "G-V44R8HQJTJ"

};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };