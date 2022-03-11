import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  addDoc,
  getDocs
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDYOz75Tte3dHdQuRjLGkGOGQ4TpyuTUmY',
  authDomain: 'stay-hotel-application.firebaseapp.com',
  projectId: 'stay-hotel-application',
  storageBucket: 'stay-hotel-application.appspot.com',
  messagingSenderId: '776849652693',
  appId: '1:776849652693:web:80e41035ece5b84dd9db5c'
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const fs = getFirestore(app);
const storage = getStorage(app);

export {
  auth,
  addDoc,
  getDocs,
  fs,
  storage,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
};
