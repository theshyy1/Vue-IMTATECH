<template>
  <div class="pr-9 min-h-fit">
    <p class="p-3 text-xl font-semibold">Danh mục</p>
    <div class="mx-auto w-full">
      <ul class="p-3" v-for="i in product" :key="i.id">
        <li class="p-3 hover:bg-slate-200 rounded-md">{{ i.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import useProductStore from "../store/products";

const store = useProductStore();
onMounted(() => store.getProducts());
const product = computed(() => store.allProducts);
</script>