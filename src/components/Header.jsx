import React from "react";
import "../styles/header.css";

import { useAuth } from "../contexts/AuthContext";
export default function Header() {
  const { handleLogout, user } = useAuth();
  return (
    <div className="d-flex header">
      <div>⚛️🔥💬</div>
      {user ? (
        <button className="btn sign-out" onClick={handleLogout}>
          Sign out
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
