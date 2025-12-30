import axios from "axios";
export const getAllProducts = async () => {
  const res = await axios.get("https://deployement-end.onrender.com/api/product/getall");
  return res.data.products;
};