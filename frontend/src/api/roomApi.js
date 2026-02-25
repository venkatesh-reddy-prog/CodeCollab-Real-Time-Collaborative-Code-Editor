import axios from "axios";

const API = "http://localhost:8080/api/rooms";

const getAuthHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});

export const createRoom = () => {
  return axios.post(`${API}/create`, {}, getAuthHeader());
};

export const getRoom = (roomCode) => {
  return axios.get(`${API}/${roomCode}`, getAuthHeader());
};