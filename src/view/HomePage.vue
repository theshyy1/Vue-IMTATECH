<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { getProductsApi } from "../api/https";
import useProductStore from "../store/products";
import { useRouter } from "vue-router";
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
      <div v-for="item in products" :key="item.id">
        <router-link :to="`/products/${item.id}`">
          <img :src="item.image" width="200" alt="" />
        </router-link>

        <p class="text-base mt-2">{{ item.name }}</p>

        <span v-if="item?.star !== null && !isNaN(item?.star)">
          {{ item.soldQuantity }} / {{ Math.ceil(item?.star) }}
          <template v-for="i in Math.min(parseInt(item?.star), 5)">
            ⭐️
          </template>
        </span>
        <span v-else>No rating</span>

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
