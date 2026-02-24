import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div
      style={{
        padding: "10px 20px",
        background: "#1e1e1e",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <h3>CodeCollab</h3>
      <div>
        <span style={{ marginRight: 20 }}>👤 {user}</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}