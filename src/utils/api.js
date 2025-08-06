import axios from "axios";

// Hardcoded backend API URL
const api = axios.create({
  baseURL: "https://age-06082025.up.railway.app",
});

export default api;
