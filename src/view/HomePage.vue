<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { getProductsApi } from "../api/https";
import useProductStore from "../store/products";
const store = useProductStore();

onMounted(() => {
  store.getProducts();
});

onUnmounted(() => {
  store.searchList = [];
});

const products = computed(() => {
  if (store.searchList.length > 0) {
    return store.searchList;
  } else {
    return store.allProducts;
  }
});
</script>
<template>
  <div class="p-3 bg-slate-50">
    <h1>Home Page</h1>
    <div class="grid grid-cols-4 gap-3">
      <div v-for="item in products" class="mb-4" :key="item.id">
        <router-link :to="`/products/${item.id}`">
          <img :src="item.image" width="200" alt="" />
        </router-link>

        <p class="text-base mt-2">{{ item.name }}</p>

        <ul>
          <template v-for="index in 5">
            <i
              v-if="index <= item.star"
              key="index"
              class="fa-solid fa-star text-red-600"
            ></i>
            <i v-else class="fa-regular fa-star"></i>
          </template>
          <span>({{ item.soldQuantity }})</span>
        </ul>

        <p class="text-[16px] font-semibold">
          <span class="line-through text-sm font-thin"
            >${{ item.oldPrice }}</span
          >
          / ${{ item.newPrice }}
        </p>

        <button
          class="p-3 mt-4 bg-sky-500 rounded-lg text-white hover:opacity-60"
        >
          <router-link :to="'products/' + item.id"> Mua ngay </router-link>
        </button>
      </div>
    </div>
  </div>
</template>
