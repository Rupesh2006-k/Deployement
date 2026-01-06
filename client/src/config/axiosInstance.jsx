import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://deployement-1-rgh8.onrender.com/api",
  withCredentials: true,
});

export default axiosInstance;
