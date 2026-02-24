import React, { useState } from "react";

export default function RoomJoinModal({ onJoin }) {
  const [roomCode, setRoomCode] = useState("");

  return (
    <div
      style={{
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 8,
        width: 300,
        background: "#fff"
      }}
    >
      <h3>Join Room</h3>
      <input
        type="text"
        placeholder="Enter Room Code"
        value={roomCode}
        onChange={(e) => setRoomCode(e.target.value)}
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      />
      <button
        onClick={() => onJoin(roomCode)}
        style={{ width: "100%", padding: 8 }}
      >
        Join
      </button>
    </div>
  );
}
