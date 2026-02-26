import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

let stompClient = null;

export const connectSocket = (roomId, onMessageReceived) => {
  if (stompClient && stompClient.connected) {
    stompClient.deactivate();
  }

  stompClient = new Client({
    webSocketFactory: () => new SockJS(`${process.env.REACT_APP_WS_URL}/ws`),
    reconnectDelay: 5000,
    onConnect: () => {
      console.log("✅ WebSocket connected, subscribing to room:", roomId);
      stompClient.subscribe(`/topic/code/${roomId}`, (message) => {
        console.log("📩 Message received:", message.body);
        onMessageReceived(JSON.parse(message.body));
      });
    },
    onDisconnect: () => {
      console.log("❌ WebSocket disconnected");
    },
    onStompError: (frame) => {
      console.error("STOMP error:", frame);
    }
  });

  stompClient.activate();
};

export const sendCodeUpdate = (message) => {
  if (stompClient && stompClient.connected) {
    stompClient.publish({
      destination: "/app/edit",
      body: JSON.stringify(message),
    });
  } else {
    console.warn("⚠️ STOMP not connected, can't send message");
  }
};