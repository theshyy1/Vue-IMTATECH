import axios from "axios";

export const getProducts = async () => {
  try {
    const res = await axios.get("http://localhost:3000/products");
    return res.data;
  } catch (error) {
    console.log("GET_ERROR", error);
  }
};
