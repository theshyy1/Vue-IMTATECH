
<script >
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getProduct"]),
    products() {
      return this.getProduct;
    },
  },

  mounted() {
    this.$store.dispatch("fetchProduct");
  },
};
</script>
<template>
  <div class="p-3 bg-slate-50">
    <h1>Home Page</h1>
    <div class="grid grid-cols-5 gap-5">
      <div v-for="item in products" :key="item.id">
        <img :src="item.image" width="200" alt="" />

        <p class="text-2xl mt-2">{{ item.name }}</p>

        <span v-if="item?.star !== null && !isNaN(item?.star)">
          {{ item.soldQuantity }} / {{ Math.ceil(item?.star) }}
          <template v-for="i in Math.min(parseInt(item?.star), 5)">
            ⭐️
          </template>
        </span>
        <span v-else>No rating</span>

        <p class="text-[16px] font-semibold text-center">
          <span class="line-through text-sm font-thin"
            >${{ item.oldPrice }}</span
          >
          / ${{ item.newPrice }}
        </p>

        <button class="p-3 mt-4 bg-sky-500 rounded-lg">
          <router-link :to="'products/' + item.id"> Mua ngay </router-link>
        </button>
      </div>
    </div>
  </div>
</template>
