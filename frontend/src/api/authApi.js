import axios from "axios";

// Use environment variable in production, fallback to localhost for dev
const BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:8080";

const API = `${BASE_URL}/api/auth`;

export const registerUser = (user) => {
  return axios.post(`${API}/register`, user);
};

export const loginUser = (credentials) => {
  return axios.post(`${API}/login`, credentials);
};