import React from "react";
import "../styles/chat.css";
import { useAuth } from "../contexts/AuthContext";

export default function Chat({ data }) {
  const { message, image, uid } = data;
  const { user } = useAuth();
  const messageType = uid === user.uid ? "sent" : "received";
  return (
    <div className={`chat-message ${messageType}`}>
      <img
        className={`profile-image ${messageType}`}
        src={image || "https://adorable.io/avatars/image.png"}
        alt="profile"
      />
      <p className={`message ${messageType}`}>{message}</p>
    </div>
  );
}
