import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import {
  getFirestore,
  query,
  orderBy,
  limit,
  collection,
} from "firebase/firestore";
import { app } from "../utils/firebase.js";
import { useCollectionData } from "react-firebase-hooks/firestore";

const db = getFirestore(app);
export default function ChatHistory() {
  const messagesRef = collection(db, "Messages");
  const messageQuery = query(messagesRef, orderBy("createdAt"), limit(25));
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
    </div>
  );
}
