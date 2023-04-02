<template>
  <div class="accordion-item">
    <h3 class="heading">
      <button class="header">
        <i class="icon" />
        {{ props.item.heading }}
      </button>
    </h3>
    <div class="content">
      {{ props.item.content }}
    </div>
  </div>
</template>

<script setup lang="ts">
// models
import { Item } from "@/models/accordion";

const props = defineProps<{
  item: Item;
}>();
</script>

<style lang="scss" scoped>
.accordion-item {
  color: $color-test;
}
</style>
