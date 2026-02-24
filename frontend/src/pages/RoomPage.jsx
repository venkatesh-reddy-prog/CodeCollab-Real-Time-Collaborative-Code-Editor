import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RoomPage() {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  const createRoom = async () => {
    const res = await axios.post("http://localhost:8080/rooms/create?owner=user");
    navigate(`/editor/${res.data.roomCode}`);
  };

  const joinRoom = () => {
    navigate(`/editor/${roomId}`);
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Rooms</h2>
      <button onClick={createRoom}>Create Room</button>
      <br/><br/>
      <input placeholder="Enter Room Code" onChange={(e)=>setRoomId(e.target.value)} />
      <button onClick={joinRoom}>Join</button>
    </div>
  );
}