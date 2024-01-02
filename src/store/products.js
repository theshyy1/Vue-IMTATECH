import { defineStore } from "pinia";
import { ref } from "vue";
import { getProductsApi } from "../api/https";

const useProductStore = defineStore("products", () => {
  const allProducts = ref([]);
  const searchList = ref([]);
  const title = ref("");

  const getProducts = async () => {
    const res = await getProductsApi();
    const data = await res.data;
    allProducts.value = data;
  };
  const searchProducts = async (title) => {
    const res = await getProductsApi(title);
    const data = await res.data;
    searchList.value = data;
  };

  return { getProducts, searchProducts, allProducts, title, searchList };
});

export default useProductStore;
