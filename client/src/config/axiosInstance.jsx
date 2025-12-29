import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://deployement-back.onrender.com",
  withCredentials: true,
});

export default axiosInstance;
