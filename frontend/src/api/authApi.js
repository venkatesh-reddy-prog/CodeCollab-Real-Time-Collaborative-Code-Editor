import axios from "axios";

const API = "http://localhost:8080/auth";

export const registerUser = (user) => {
  return axios.post(`${API}/register`, user);
};

export const loginUser = (credentials) => {
  return axios.post(`${API}/login`, credentials);
};