<template>
  <div class="cart">
    <h2 class="text-xl font-bold">Giỏ hàng</h2>
    <table class="cart-items">
      <thead>
        <tr>
          <th>Sản phẩm</th>
          <th>Giá</th>
          <th>Số lượng</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr class="cart-item">
          <td>
            <img src="" alt="Ảnh nè" />
            <span>Tên sản phẩm</span>
          </td>
          <td>$50</td>
          <td>
            <input type="number" value="2" />
          </td>
          <td>
            <button class="remove-btn bg-red-500 text-white p-3 rounded-md">
              Xóa
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="cart-summary">
      <p>Tổng tiền: $100</p>
      <button class="checkout-btn">Thanh toán</button>
    </div>
  </div>
</template>

<style scoped>
.cart {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  width: 100%;
}

.cart h2 {
  text-align: center;
}

.cart-items {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.cart-items th,
.cart-items td {
  border-bottom: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}

.cart-items img {
  width: 50px;
  height: 50px;
  vertical-align: middle;
  margin-right: 10px;
}

.cart-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.checkout-btn {
  padding: 10px 20px;
  background-color: #55bbff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>