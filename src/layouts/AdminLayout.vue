<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <aside>
    <ul>
      <li>Products</li>
      <li>Users</li>
    </ul>
  </aside>
  <transition name="fade" mode="out-in">
    <router-view v-slot="{ Component, route }">
      <KeepAlive>
        <div :key="route.name">
          <component :is="Component" />
        </div>
      </KeepAlive>
    </router-view>
  </transition>
</template>
