import axios from "axios";

const API_URL = "http://localhost:8080/api";

export default axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
});
