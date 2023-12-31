<template>
  <div class="pr-9 min-h-fit">
    <p class="p-3 text-xl font-semibold">Danh mục</p>
    <div class="mx-auto w-full">
      <ul class="p-3" v-for="i in products" :key="i.id">
        <li class="p-3 hover:bg-slate-200 rounded-md">{{ i.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
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