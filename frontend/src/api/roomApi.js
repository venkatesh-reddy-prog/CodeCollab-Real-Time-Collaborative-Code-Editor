import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";
const API = `${BASE_URL}/api/rooms`;

const getAuthHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  },
  withCredentials: true
});

export const createRoom = () => {
  return axios.post(`${API}/create`, {}, getAuthHeader());
};

export const getRoom = (roomCode) => {
  return axios.get(`${API}/${roomCode}`, getAuthHeader());
};