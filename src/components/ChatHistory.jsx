import React, { useEffect, useState } from "react";
import { query, orderBy, limit } from "firebase/firestore";
import { messageRef } from "../utils/firebase.js";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Chat from "./Chat";

export default function ChatHistory({ focus }) {
  const messageQuery = query(messageRef, orderBy("createdAt"), limit(25));
  const [snapshot, loading] = useCollectionData(messageQuery);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!loading) {
      const data = snapshot.map(({ message, image, uid }, idx) => {
        return {
          data: { message: message, image: image, uid: uid },
          key: idx,
        };
      });
      setMessages(data);
    }
  }, [snapshot, loading]);
  return (
    <div>
      {messages.map(({ data, key }) => (
        <Chat data={data} key={key} />
      ))}
      <span ref={focus}></span>
    </div>
  );
}
