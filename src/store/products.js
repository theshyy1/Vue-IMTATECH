import { defineStore } from "pinia";
import { ref } from "vue";
import { getProductsApi } from "../api/https";

const useProductStore = defineStore("products", () => {
  //   const isLoading = ref(false);
  const allProducts = ref([]);

  const getProducts = async () => {
    // isLoading.value = true;
    const res = await getProductsApi();
    const data = await res.data;
    allProducts.value = data;
  };

  return { getProducts, allProducts };
});

export default useProductStore;
