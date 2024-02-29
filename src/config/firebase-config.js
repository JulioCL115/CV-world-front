import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDE8WITcG5Vqu_rCNCFB-W6CPjI951LAqs",
  authDomain: "cv-world-6165a.firebaseapp.com",
  projectId: "cv-world-6165a",
  storageBucket: "cv-world-6165a.appspot.com",
  messagingSenderId: "26968809682",
  appId: "1:26968809682:web:7fc0da2bb7ae5259db8d0b",
  measurementId: "G-9Z6K8PKC9R"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Obtener el objeto de autenticaciÃÂÃÂ³n de Firebase

export { auth };
