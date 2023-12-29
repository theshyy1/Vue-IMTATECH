
<template>
  <div class="p-3 bg-slate-50">
    <h1>Home Page</h1>
    <div class="grid grid-cols-5 gap-5">
      <div>
        <img src="../assets/vue.svg" width="200" alt="" />

        <p>Tên sản phẩm</p>

        <p>Star</p>

        <p>Giá</p>

        <button class="p-3 mt-4 bg-sky-500 rounded-lg">
          <router-link to="/1/details"> Mua ngay </router-link>
        </button>
      </div>
    </div>
  </div>
</template>
