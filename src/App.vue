<script setup>
import { RouterView } from "vue-router";
import BaseLayout from "./layouts/BaseLayout.vue";
</script>
<template>
  <div class="">
    <BaseLayout>
      <router-view></router-view>
    </BaseLayout>
  </div>
</template>

<style scoped></style>
