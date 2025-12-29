import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://deployement-p05g.onrender.com/api",
  withCredentials: true,
});

export default axiosInstance;
