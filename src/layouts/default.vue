<template>
  <div class="layout">
    <TheHeader />
    <slot />
  </div>
</template>

<script setup lang="ts">
import TheHeader from "@/components/organisms/TheHeader.vue";
</script>
