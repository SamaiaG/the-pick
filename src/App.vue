<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <TheHeader class="header" />
  <RouterView class="content" />
  <TheFooter class="footer" />
</template>

<style scoped>
.header {
  position: fixed;
  z-index: 99;
}

@media (max-width: 768px) {
  .header {
  position: absolute;
}
.content {
  margin-top: 0;
}
}
</style>