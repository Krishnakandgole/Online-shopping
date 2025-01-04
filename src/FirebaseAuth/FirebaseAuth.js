import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBAU1p4Xd3qB3oKiKE_lkRYWPEzzQgl1NA",
    authDomain: "e-commerce-74a26.firebaseapp.com",
    projectId: "e-commerce-74a26",
    storageBucket: "e-commerce-74a26.firebasestorage.app",
    messagingSenderId: "868725566583",
    appId: "1:868725566583:web:3f9fbc48b3bb7e8989aa72"
  };

  const app = initializeApp(firebaseConfig);


  const auth = getAuth();

  export { app, auth };