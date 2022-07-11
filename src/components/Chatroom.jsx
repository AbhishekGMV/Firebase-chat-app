import React from "react";
import "../styles/chatroom.css";
import { useState } from "react";
import ChatHistory from "./ChatHistory";
import { app } from "../utils/firebase.js";
import { useAuth } from "../contexts/AuthContext";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const db = getFirestore(app);
const messagesRef = collection(db, "Messages");

export default function Chatroom() {
  const [message, setMessage] = useState("");

  const { user } = useAuth();
  const sendMessage = (e) => {
    e.preventDefault();
    addDoc(messagesRef, {
      message: message,
      uid: user.uid,
      image: user.photoURL,
      createdAt: serverTimestamp(),
    });
    setMessage("");
  };

  return (
    <div>
      <div className="chatroom-body">
        <ChatHistory />
      </div>
      <form className="form" onSubmit={sendMessage}>
        <input
          className="message-field"
          placeholder="Say something nice"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="send-button"
          type="submit"
          disabled={!message.length}
        >
          🕊️
        </button>
      </form>
    </div>
  );
}
