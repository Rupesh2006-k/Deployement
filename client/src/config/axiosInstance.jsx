import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL || (import.meta.env.PROD ? "https://deployement-p05g.onrender.com/api" : "/api");

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

export default axiosInstance;
