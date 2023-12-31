<script setup>
  import AdminLayout from '../layouts/AdminLayout.vue';
</script>
<script >

import { mapActions, mapGetters } from "vuex";

export default {
  name: "product",
  components: {
    // listProduct, addProduct,update,
  },
  data() {
    return {
      data: {
        id: "", 
        name: "",
        oldPrice: 0,
        newPrice: 0,
        start:0,
        soldQuantity : 0,
        image  : "",
        quantityInStock: 0
      },
      filterValue: '', 
    };
  },
  computed: {
    // product(){
    //   const store = useStore();
    //   return store.getters.getProduct;
    // },
    ...mapGetters(["getProduct"]),

    filteredProducts() {
      return this.data.filter((product) =>
        product.name.toLowerCase().includes(this.filterValue.toLowerCase())
      );
    },
  },
  methods: {
    deleteProduct(id) {
      this.$store.dispatch("deleteProduct", id);
      console.log("id", id);
    },
    addProduct() {
      // show:false,
      this.$store.dispatch("addProduct", this.data);
      this.showAdd = false;
    },
    
    updateProduct() {
      this.$store.dispatch("updateProduct", this.data);
      this.showEdit = false;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProduct");
  },
};
</script>
<template>
  <div class="flex justify-start  ">
    <AdminLayout></AdminLayout>
    <div class="">
      <div class="p-2.5 mt-3 flex items-center rounded-md 
        px-4 duration-300 cursor-pointer  bg-gray-700 w-[200px] ml-[90px]">
          <i class="bi bi-search text-sm"></i>
          <input class="text-[15px] text-white ml-4 w-full bg-transparent focus:outline-none" placeholder="Search" />
        </div>
      <router-link to="/product/add"
      ><button
        class="bg-green-500 text-white py-1 px-2 rounded w-[200px] ml-[90px] h-[60px] my-5"
      >
        ADD
      </button></router-link
    >
    <table class="bg-white border border-gray-300  ml-[90px] m-auto">
      <thead>
        <tr>
          <th class="border border-gray-300 py-2 px-4 border-b">#</th>
          <th class="border border-gray-300 py-2 px-4 border-b">Name</th>
          <th class="border border-gray-300 py-2 px-4 border-b">oldPrice</th>
          <th class="border border-gray-300 py-2 px-4 border-b">newPrice</th>
          <th class="border border-gray-300 py-2 px-4 border-b">start</th>
          <th class="border border-gray-300 py-2 px-4 border-b">soldQuantity</th>
          <th class="border border-gray-300 py-2 px-4 border-b">image</th>
          <th class="border border-gray-300 py-2 px-4 border-b">quantityInStock</th>
          <th class="border border-gray-300 py-2 px-4 border-b">Action</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in getProduct" :key="item.id">
          <td class="border border-gray-300 py-2 px-4 border-b" scope="row">
            {{ item.id }}
          </td>
          <td class="border border-gray-300 py-2 px-4 border-b">
            {{ item.name }}
          </td>
          <td class="border border-gray-300 py-2 px-4 border-b">
            {{ item.oldPrice }}
          </td>
          <td class="border border-gray-300 py-2 px-4 border-b">
            {{ item.newPrice }}
          </td>
          <td class="border border-gray-300 py-2 px-4 border-b">
            {{ item.start }}
          </td>
          <td class="border border-gray-300 py-2 px-4 border-b">
            {{ item.soldQuantity }}
          </td>
          <td class="border border-gray-300 py-2 px-4 border-b">
            <img :src="item.image" alt="">
          </td>
          <td class="border border-gray-300 py-2 px-4 border-b">
            {{ item.quantityInStock }}
          </td>
          <td class=" border border-gray-300 py-10 flex justify-center">
            <router-link :to="`/product/edit/${item.id}`"
              ><button
                class="mr-4 bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Edit
              </button></router-link  
            >
            <button
              class="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              @click="deleteProduct(item.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    
  </div>
</template>