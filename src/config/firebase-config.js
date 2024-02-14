import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDt1SmjzwfRsELni29F9O5w2EOhfkKS6KI",
  authDomain: "cv-world-797de.firebaseapp.com",
  projectId: "cv-world-797de",
  storageBucket: "cv-world-797de.appspot.com",
  messagingSenderId: "574193833027",
  appId: "1:574193833027:web:6969eb87105d9d3ca8b0f6"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };