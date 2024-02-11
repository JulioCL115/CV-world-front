import {signOut} from "firebase/auth"
import { app, auth } from "../config/firebase-config";

function logOut () {
const fn = async () => {
    const lg = await signOut(auth)
}
    
}