import axiosInstance from "../config/axiosInstance";

export const getAllUsers = async () => {
  const res = await axiosInstance.get("/user/auth/get-user");
  return res.data.users;
};
