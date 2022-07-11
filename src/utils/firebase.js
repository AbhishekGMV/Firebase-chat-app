import { initializeApp } from "firebase/app";
// import { firestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyV6_we5t_AhujnorHHyVOwVjfWdCRBKA",
  authDomain: "fireship-chat-app-clone.firebaseapp.com",
  projectId: "fireship-chat-app-clone",
  storageBucket: "fireship-chat-app-clone.appspot.com",
  messagingSenderId: "412769413654",
  appId: "1:412769413654:web:69d53e93deb25b488de337",
  measurementId: "G-MBGDC1E6KD",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
