<template>
  <div class="accordion-items">
    <AccordionItem
      v-for="(item, index) in props.items"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script setup lang="ts">
import AccordionItem from "@/components/molecules/AccordionItem.vue";

// models
import { Item } from "@/models/accordion";

const props = defineProps<{
  items: Item[];
}>();
</script>

<style lang="scss" scoped>
.accordion-items {
  color: $color-test;
}
</style>
