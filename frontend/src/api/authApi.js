import axios from "axios";

const API = "http://localhost:8080/api/auth";  // add /api/

export const registerUser = (user) => {
  return axios.post(`${API}/register`, user);
};

export const loginUser = (credentials) => {
  return axios.post(`${API}/login`, credentials);
};