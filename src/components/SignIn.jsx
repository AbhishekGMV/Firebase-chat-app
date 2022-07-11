import React from "react";
import "../styles/signin.css";
import { useAuth } from "../contexts/AuthContext";

export default function SignIn() {
  const { signInWithGoogle } = useAuth();
  return (
    <div className="chat-box-body">
      <button className="btn sign-in" onClick={signInWithGoogle}>
        SignIn With Google
      </button>
      <p className="warn-msg">
        Do not violate the community guidelines or you will be banned for life!
      </p>
    </div>
  );
}
