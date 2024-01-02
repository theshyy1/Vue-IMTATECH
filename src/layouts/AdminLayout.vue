<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="relative">
    <AdHeader />
    <div class="">
      <Sidebar />
      <router-view
        class="float-right bg-[#bbdff0] h-[800px] w-5/6 p-6"
        v-slot="{ Component, route }"
      >
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
</template>
