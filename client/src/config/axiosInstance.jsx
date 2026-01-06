import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://deployement-end.onrender.com/api",
  withCredentials: true,
});

export default axiosInstance;
