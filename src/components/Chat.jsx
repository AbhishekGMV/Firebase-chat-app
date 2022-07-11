import React from "react";
import "../styles/chat.css";
import { useAuth } from "../contexts/AuthContext";

export default function Chat({ data }) {
  const { message, image, uid } = data;
  const { user } = useAuth();
  const messageType = uid === user.uid ? "sent" : "";
  return (
    <div className={`chat-message ${messageType}`}>
      <img
        className={`profile-image ${messageType}`}
        src={image}
        alt="profile"
      />
      <p className={`message ${messageType}`}>{message}</p>
    </div>
  );
}
