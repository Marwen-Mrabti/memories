import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCHUpcjArwQZUjQ89E53EN_xsBU9mAcWsk',
  authDomain: 'healthy-saga-350808.firebaseapp.com',
  projectId: 'healthy-saga-350808',
  storageBucket: 'healthy-saga-350808.appspot.com',
  messagingSenderId: '52733859148',
  appId: '1:52733859148:web:61f304c4b9c3ea69086be9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
