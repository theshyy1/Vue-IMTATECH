<script setup>
import { RouterView } from "vue-router";

import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import SidePage from "../view/SidePage.vue";
</script>

<template>
  <div class="bg-slate-100 relative flex flex-col min-h-screen">
    <Header></Header>
    <div class="relative flex-grow flex">
      <div class="m-2 bg-slate-50 rounded-md">
        <SidePage></SidePage>
      </div>
      <div class="bg-slate-50 m-2 flex-grow w-full md:w-3/4 sm:w-full">
        <router-view v-slot="{ Component, route }">
          <transition name="fade" mode="out-in">
            <KeepAlive>
              <div :key="route.name">
                <component :is="Component" />
              </div>
            </KeepAlive>
          </transition>
        </router-view>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
