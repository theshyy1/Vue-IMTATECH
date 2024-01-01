import axios from "axios";
import { instance } from "./api";

export const getProductsApi = () => instance.get("/products");

export const getProductApi = (id) => instance.get(`/products/${id}`);

export const register = (user) => instance.post("/register", user);

export const updateUserAPI = (user) => instance.put(`/users/${user.id}`, user);

export const signin = (user) => instance.post("/signin", user);
