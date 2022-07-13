import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const messageRef = collection(db, "Messages");
export const auth = getAuth(app);
