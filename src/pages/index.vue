<template>
  <div class="page">
    <AccordionItems :items="items" />
  </div>
</template>

<script setup lang="ts">
import AccordionItems from "@/components/molecules/AccordionItems.vue";

// models
import { Item } from "@/models/accordion";

const items = ref<Item[]>([
  {
    heading: "見出し1",
    content: "コンテンツ",
  },
  {
    heading: "見出し2",
    content: "コンテンツ",
  },
]);
</script>
