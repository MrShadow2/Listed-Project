
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDZ_Ku8sUcL2B8_HPN2l0q_MKNMUEHCA0",
  authDomain: "app-auth-13450.firebaseapp.com",
  projectId: "app-auth-13450",
  storageBucket: "app-auth-13450.appspot.com",
  messagingSenderId: "766822343228",
  appId: "1:766822343228:web:c3e9dee99b39324ef6d939",
  measurementId: "G-YZ7LB6T85G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}