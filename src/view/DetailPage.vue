<template>
  <div>
    <div class="flex gap-5 pb-5">
      <div class="">
        <img
          src="../assets/vue.svg"
          width="250"
          class="ml-10 bg-slate-200 p-1 rounded-md"
          alt=""
        />
      </div>
      <div class="w-1/4 m-5">
        <h1 class="text-xl font-semibold pt-5">
          Tên sản phẩm {{ this.idPrd }}
        </h1>
        <p class="text-slate-500">Số lượng hàng đã bán / Đánh giá</p>
        <ul class="leading-[50px] text-3xl">
          <li>Giá</li>
          <li>Số hàng tồn kho</li>
          <li></li>
        </ul>
      </div>
      <div class="mx-auto flex flex-col justify-end">
        <div class="number-input">
          <button
            onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
            class="minus"
          ></button>
          <input
            class="quantity"
            min="0"
            name="quantity"
            value="1"
            type="number"
          />
          <button
            onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
            class="plus"
          ></button>
        </div>
        <button class="p-3 bg-sky-500">Mua ngay</button>
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
              <router-link to="/1/details"> Mua ngay </router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idPrd: "",
    };
  },
  mounted() {
    // Lấy tham số từ path
    this.idPrd = this.$route.params.id;
    console.log(this.idPrd); // In ra giá trị của userId từ đường dẫn
  },
};
</script>

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
  -webkit-appearance: none;
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