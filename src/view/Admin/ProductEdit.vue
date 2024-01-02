<script setup>
import AdminLayout from "../layouts/AdminLayout.vue";
</script>
<script>
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
        start: 0,
        soldQuantity: 0,
        image: "",
        quantityInStock: 0,
      },
      error: {
        id: "",
        name: "",
        oldPrice: 0,
        newPrice: 0,
        start: 0,
        soldQuantity: 0,
        image: "",
        quantityInStock: 0,
      },
    };
  },
  computed: {
    ...mapGetters(["getProduct"]),
  },
  methods: {
    validate() {
      let isValid = true;
      this.error = {
        id: "",
        name: "",
        oldPrice: 0,
        newPrice: 0,
        start: 0,
        soldQuantity: 0,
        image: "",
        quantityInStock: 0,
      };
      if (!this.data.name) {
        this.error.name = "Name is ";
        isValid = false;
      }
      if (!this.data.oldPrice) {
        this.error.oldPrice = "oldPrice is ";
        isValid = false;
      }
      if (!this.data.newPrice) {
        this.error.newPrice = "Price is ";
        isValid = false;
      }
      if (!this.data.start) {
        this.error.start = "start is ";
        isValid = false;
      }
      if (!this.data.soldQuantity) {
        this.error.soldQuantity = "soldQuantity is ";
        isValid = false;
      }
      if (!this.data.image) {
        this.error.image = "image is ";
        isValid = false;
      }
      if (!this.data.quantityInStock) {
        this.error.quantityInStock = "quantityInStock is ";
        isValid = false;
      }

      return isValid;
    },
    editProduct(id) {
      const data = this.$store.dispatch("editProduct", id).then((response) => {
        console.log("response:", response);
        this.data.id = response[0].id;
        this.data.name = response[0].name;
        this.data.price = response[0].price;
      });
    },
    updateProduct() {
      if (this.validate()) {
        this.$store.dispatch("updateProduct", this.data);
        alert("Bạn đã sửa sản phẩm thành công");
        this.$router.back();
      }
    },
  },
  mounted() {
    var id = this.$route.params.id;
    const data = this.$store.dispatch("editProduct", id).then((response) => {
      console.log("response:", response);
      this.data.id = response[0].id;
      this.data.name = response[0].name;
      this.data.oldPrice = response[0].oldPrice;
      this.data.newPrice = response[0].newPrice;
      this.data.start = response[0].start;
      this.data.soldQuantity = response[0].soldQuantity;
      this.data.image = response[0].image;
      this.data.quantityInStock = response[0].quantityInStock;
    });
    // this.$store.dispatch("fetchProduct");
  },
};
</script>
<template>
  <div>
    <AdminLayout></AdminLayout>
    <div
      class="bg-yellow-500 ml-[300px] text-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      UPDATE
    </div>

    <div class="max-w-md ml-[550px] mt-4">
      <form
        @submit.prevent="updateProduct()"
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input
            v-model="data.name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter here"
            
          />
          <p class="text-red-500" v-if="error.name" >{{ error.name }}</p>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Old Price
          </label>
          <input
            v-model="data.oldPrice"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="number"
            placeholder="Enter here"
            
          />
          <p class="text-red-500" v-if="error.oldPrice" >{{ error.oldPrice }}</p>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            New Price
          </label>
          <input
            v-model="data.newPrice"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="number"
            placeholder="Enter here"
            
          />
          <p class="text-red-500" v-if="error.newPrice" >{{ error.newPrice }}</p>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Start
          </label>
          <input
            v-model="data.start"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Enter here"
            
          />
          <p class="text-red-500" v-if="error.start" >{{ error.start }}</p>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Sold Quantity
          </label>
          <input
            v-model="data.soldQuantity"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="number"
            placeholder="Enter here"
            
          />
          <p class="text-red-500" v-if="error.soldQuantity" >{{ error.soldQuantity }}</p>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Image
          </label>
          <input
            v-model="data.image"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter here"
            
          />
          <p class="text-red-500" v-if="error.image" >{{ error.image }}</p>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            quantityInStock
          </label>
          <input
            v-model="data.quantityInStock"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="number"
            placeholder="Enter here"
            
          />
          <p class="text-red-500" v-if="error.quantityInStock" >{{ error.quantityInStock }}</p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>