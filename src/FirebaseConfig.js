import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAfqPdM54aBRjZzECKmTeqAcSERXFEqlr8",
  authDomain: "authenticator-85102.firebaseapp.com",
  projectId: "authenticator-85102",
  storageBucket: "authenticator-85102.appspot.com",
  messagingSenderId: "594122394192",
  appId: "1:594122394192:web:ea4a9089445b11a5215f55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {auth, provider}

