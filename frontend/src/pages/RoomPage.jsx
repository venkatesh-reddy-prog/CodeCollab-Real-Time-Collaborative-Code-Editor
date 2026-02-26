import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRoom } from "../api/roomApi";
import "./RoomPage.css";

export default function RoomPage() {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  const handleCreateRoom = async () => {
    try {
      const res = await createRoom();
      navigate(`/editor/${res.data.roomCode}`);
    } catch (err) {
      alert("Failed to create room: " + err.message);
    }
  };

  const joinRoom = () => {
    if (roomId.trim()) {
      navigate(`/editor/${roomId}`);
    }
  };

  return (
    <div className="room-container">
      <div className="room-card">
        <h1 className="room-title">CodeCollab Rooms</h1>
        <p className="room-subtitle">Create a new room or join an existing one</p>

        <button className="create-btn" onClick={handleCreateRoom}>
          🚀 Create New Room
        </button>

        <div className="divider">OR</div>

        <input
          className="room-input"
          placeholder="Enter Room Code"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />

        <button className="join-btn" onClick={joinRoom}>
          Join Room
        </button>
      </div>
    </div>
  );
}