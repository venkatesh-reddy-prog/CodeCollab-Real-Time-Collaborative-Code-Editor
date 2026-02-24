import React, { useState, useContext } from "react";
import { loginUser, registerUser } from "../api/authApi";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await loginUser({ username, password });
    login(res.data);
    navigate("/rooms");
  };

  const handleRegister = async () => {
    await registerUser({ username, password });
    alert("Registered! Now login.");
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>CodeCollab Login</h2>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} /><br/><br/>
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br/><br/>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}