import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CodeEditor from "../components/CodeEditor";
import { connectSocket, sendCodeUpdate } from "../websocket/socketClient";

export default function EditorPage() {
  const { roomId } = useParams();
  const [code, setCode] = useState("// Start coding...");

  useEffect(() => {
    connectSocket(roomId, (message) => {
      if (message.roomId === roomId) {
        setCode(message.code);
      }
    });
  }, [roomId]);

  const handleChange = (newCode) => {
    setCode(newCode);
    sendCodeUpdate({
      roomId: roomId,
      code: newCode,
      user: "user",
      type: "EDIT"
    });
  };

  return (
    <div>
      <h3>Room: {roomId}</h3>
      <CodeEditor code={code} onChange={handleChange} />
    </div>
  );
}