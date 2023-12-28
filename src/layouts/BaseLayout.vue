<script setup>
import { RouterView } from "vue-router";

import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import SidePage from "../view/SidePage.vue";
</script>

<template>
  <div class="bg-slate-100 relative flex flex-col min-h-screen">
    <Header class=" w-full z-20"></Header>
    <div class="relative flex-grow flex ">
      <div class="m-5 bg-slate-50 fixed rounded-md">
        <SidePage />
      </div>
      <div class="bg-slate-50 m-5 flex-grow w-full md:w-3/4 sm:w-full">
        <slot></slot>
      </div>
    </div>
    <Footer class="mt-auto w-full bg-gray-200 py-4 text-center"></Footer>
  </div>
</template>

