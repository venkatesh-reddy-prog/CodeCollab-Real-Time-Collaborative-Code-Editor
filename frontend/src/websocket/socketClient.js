import { Client } from "@stomp/stompjs";

let stompClient = null;

export const connectSocket = (roomId, onMessageReceived) => {
  if (stompClient && stompClient.connected) {
    stompClient.deactivate();
  }

  stompClient = new Client({
    brokerURL: "ws://localhost:8080/ws/websocket",
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
    console.log("📤 Sending update:", message);
    stompClient.publish({
      destination: "/app/edit",
      body: JSON.stringify(message),
    });
  } else {
    console.warn("⚠️ STOMP not connected, can't send message");
  }
};