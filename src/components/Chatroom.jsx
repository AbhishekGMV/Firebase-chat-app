import React, { useRef } from "react";
import { useState } from "react";
import ChatHistory from "./ChatHistory";
import { messageRef } from "../utils/firebase.js";
import { useAuth } from "../contexts/AuthContext";
import {
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import "../styles/chatroom.css";

export default function Chatroom() {
  const [message, setMessage] = useState("");
  const focus = useRef();
  const { user } = useAuth();
  const sendMessage = (e) => {
    e.preventDefault();
    const {uid, photoURL, displayName} = user
    addDoc(messageRef, {
      message: message,
      uid: uid,
      image: photoURL,
      name: displayName,
      createdAt: serverTimestamp(),
    });
    setMessage("");
    focus.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="chatroom-body">
        <ChatHistory focus={focus} />
        {/* <span ref={focus}></span> */}
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
    </>
  );
}
