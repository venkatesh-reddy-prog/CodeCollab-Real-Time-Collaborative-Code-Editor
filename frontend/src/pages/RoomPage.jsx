import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRoom } from "../api/roomApi";

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
    <div style={{ padding: 40 }}>
      <h2>Rooms</h2>
      <button onClick={handleCreateRoom}>Create Room</button>
      <br/><br/>
      <input 
        placeholder="Enter Room Code" 
        onChange={(e) => setRoomId(e.target.value)} 
      />
      <button onClick={joinRoom}>Join</button>
    </div>
  );
}