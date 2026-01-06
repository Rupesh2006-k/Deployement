import axios from "axios";
export const getAllProducts = async () => {
  const res = await axios.get("https://deployement-1-rgh8.onrender.com/api/product/getall");
  return res.data.products;
};