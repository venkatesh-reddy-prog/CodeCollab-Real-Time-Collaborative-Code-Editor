import React, { useState, useContext } from "react";
import { loginUser, registerUser } from "../api/authApi";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await loginUser({ username, password });
      login(res.data);
      navigate("/rooms");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  const handleRegister = async () => {
    try {
      await registerUser({ username, password });
      alert("Registered successfully! Now login.");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="logo">CodeCollab</h1>
        <p className="subtitle">Real-Time Collaborative Code Editor</p>

        <input
          className="input-field"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="input-field"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

        <button className="register-btn" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
}