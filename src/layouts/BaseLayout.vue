<script setup>
import { RouterView } from "vue-router";

import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
</script>

<template>
  <Header></Header>
  <slot></slot>
  <Footer></Footer>
</template>
