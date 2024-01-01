<template>
  <div class="p-3 bg-slate-50 flex items-center gap-10">
    <router-link to="/">
      <div>
        <img
          src="../assets/tiki-corporation-logo.png"
          class="flex-none"
          width="120"
          alt=""
        />
      </div>
    </router-link>
    <label class="relative block grow ml-32">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 50 50"
        >
          <path
            d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"
          ></path>
        </svg>
      </span>
      <form action="" @submit.prevent="handleSubmit">
        <input
          class="placeholder:italic w-5/6 placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
          v-model="store.title"
          autocomplete="off"
        />

        <button
          class="absolute right-[16%] inset-y-0 before:border-[1px] before:border-gray-500 before:mr-2 hover:bg-cyan-500 hover:text-white after:mx-2 rounded-r-md"
        >
          Tìm kiếm
        </button>
      </form>
    </label>
    <div class="flex-none flex gap-5">
      <router-link to="/cart">
        <button class="bg-slate-400 p-4 rounded-lg text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="18"
            viewBox="0 0 576 512"
          >
            <path
              d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
            />
          </svg>
          Giỏ hàng
        </button>
      </router-link>
      <button class="p-4 bg-cyan-500 text-white rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="14"
          viewBox="0 0 448 512"
        >
          <path
            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
          />
        </svg>
        <router-link to="/">Đăng nhập</router-link>
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { RouterView, useRouter } from "vue-router";
import useProductStore from "../store/products";

const store = useProductStore();
const router = useRouter();
const handleSubmit = async () => {
  router.push({
    path: `/search`,
    name: "Search",
  });
  await store.searchProducts(store.title).then(() => {
    store.title = "";
  });
};
</script>
