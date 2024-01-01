import axios from "axios";
import { instance } from "./api";

export const getProductsApi = (title) => {
  if (title) {
    return instance.get(`/products?q=${title}`);
  } else {
    return instance.get(`/products`);
  }
};

export const getProductApi = (id) => instance.get(`/products/${id}`);

export const register = (user) => instance.post("/register", user);

export const updateUserAPI = (user) => instance.put(`/users/${user.id}`, user);

export const signin = (user) => instance.post("/signin", user);
