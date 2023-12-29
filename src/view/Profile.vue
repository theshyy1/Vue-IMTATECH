<script setup>
import { ref } from "vue";

const user = ref({
  name: "Nguyen Van A",
  birthDay: "18/02/1999",
  gender: "Male",
  avatar: "https://picsum.photos/150/150",
  phone: "0123456789",
  email: "hoangtrung@gmail.com",
  address: "Ha Noi, Viet Nam",
});
</script>

<template>
  <div class="">
    <h1>Profile</h1>
  </div>
</template>
