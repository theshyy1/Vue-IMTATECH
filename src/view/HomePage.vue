<script setup>
import { computed, onMounted } from "vue";
import useProductStore from "../store/products";

const store = useProductStore();

onMounted(() => store.getProducts());
const products = computed(() => store.allProducts);
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
