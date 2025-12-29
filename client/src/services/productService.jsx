import axiosInstance from "../config/axiosInstance";

export const getAllProducts = async () => {
  const res = await axiosInstance.get("/product/getall");
  return res.data.products;
};