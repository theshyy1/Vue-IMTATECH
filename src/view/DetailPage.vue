<script setup>
import { onMounted, ref } from "vue";
import { getProductApi, updateUserAPI } from "../api/https";
import { useRoute } from "vue-router";
import useAuthStore from "../store/auth";
import { toast } from "vue3-toastify";

const route = useRoute();
const currentProduct = ref(null);
const {
  userState: { user },
} = useAuthStore();

onMounted(() =>
  getProductApi(route.params.id).then(
    ({ data }) => (currentProduct.value = data)
  )
);

const quantity = ref(1);

const handleClick = async (product) => {
  const index = user && user.cart.findIndex((item) => item.id === product.id);
  console.log(index);
  if (index !== -1) {
    user.cart[index].quantity += quantity.value;
  } else {
    user.cart.push({ ...product, quantity: quantity.value });
  }

  const res = await updateUserAPI(user);
  if (res) {
    toast.success("Added x1", {
      autoClose: 1500,
      position: "bottom-right",
      theme: "colored",
    });
  }
};
</script>
<template>
  <div>
    <div class="flex gap-5 pb-5">
      <div class="">
        <img
          :src="currentProduct?.image"
          width="250"
          class="ml-10 bg-slate-200 p-1 rounded-md"
          alt=""
        />
      </div>
      <div class="w-1/4 m-5">
        <h1 class="text-xl font-semibold pt-5">
          {{ currentProduct?.name }}
        </h1>
        <div class="text-slate-500">
          Đã bán {{ currentProduct?.soldQuantity }} /
          <ul v-if="currentProduct?.star">
            <template v-for="index in 5">
              <i
                v-if="index <= currentProduct.star"
                key="index"
                class="fa-solid fa-star text-red-600"
              ></i>
              <i v-else class="fa-regular fa-star"></i>
            </template>
            <span>({{ currentProduct.soldQuantity }})</span>
          </ul>
          <span v-else>No rating</span>
        </div>
        <ul class="leading-[50px] text-3xl">
          <li class="font-bold">
            <span class="line-through text-sm font-extralight"
              >${{ currentProduct?.oldPrice }}
            </span>
            ${{ currentProduct?.newPrice }}
          </li>
        </ul>
      </div>
      <div class="mx-auto flex flex-col justify-end">
        <div class="number-input">
          <button class="minus" @click="quantity--"></button>
          <input
            class="quantity"
            min="0"
            name="quantity"
            value="1"
            type="number"
            v-model="quantity"
          />
          <button class="plus" @click="quantity++"></button>
        </div>
        <button class="p-3 bg-sky-500" @click="handleClick(currentProduct)">
          Mua ngay
        </button>
      </div>
    </div>
    <div class="p-5 m-3 border-t-[2px] border-slate-300">
      <p class="text-2xl font-semibold">Sản phẩm tương tự</p>
      <div>
        <div class="grid grid-cols-5 gap-5">
          <div>
            <img src="../assets/vue.svg" width="200" alt="" />

            <p>Tên sản phẩm</p>

            <p>Star</p>

            <p>Giá</p>

            <button class="p-3 mt-4 bg-sky-500 rounded-lg">
              <router-link to="/products/1"> Mua ngay </router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
input[type="number"] {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

.number-input {
  border: 2px solid #ddd;
  display: inline-flex;
}

.number-input,
.number-input * {
  box-sizing: border-box;
}

.number-input button {
  outline: none;
  background-color: transparent;
  border: none;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  margin: 0;
  position: relative;
}

.number-input button:after {
  display: inline-block;
  position: absolute;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f077";
  transform: translate(-50%, -50%) rotate(180deg);
}
.number-input button.plus:after {
  transform: translate(-50%, -50%) rotate(0deg);
}

.number-input input[type="number"] {
  font-family: sans-serif;
  max-width: 5rem;
  padding: 0.5rem;
  border: solid #ddd;
  border-width: 0 2px;
  font-size: 2rem;
  height: 3rem;
  font-weight: bold;
  text-align: center;
}
</style>
