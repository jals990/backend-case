import axios from "axios";

const api = axios.create({
  baseURL: process.env.url,
  headers: {
    "x-api-key": process.env.X_API_KEY
  },
});

export default api;
