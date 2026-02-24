import SockJS from "sockjs-client";
import Stomp from "stompjs";

let stompClient = null;

export const connectSocket = (onMessageReceived) => {
  const socket = new SockJS("http://localhost:8080/ws");
  stompClient = Stomp.over(socket);

  stompClient.connect({}, () => {
    stompClient.subscribe("/topic/code", (message) => {
      onMessageReceived(JSON.parse(message.body));
    });
  });
};

export const sendCodeUpdate = (message) => {
  if (stompClient) {
    stompClient.send("/app/edit", {}, JSON.stringify(message));
  }
};