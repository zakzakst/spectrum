<template>
  <div class="page">
    <AccordionItems :items="items" />
  </div>
</template>

<script setup lang="ts">
import AccordionItems from "@/components/molecules/AccordionItems.vue";

// models
import { Item } from "@/models/accordion";

// composables
import { useFaq } from "@/composables/useFaq";

const { state, fetchItems } = useFaq();

const items = ref<Item[]>([]);

onMounted(async () => {
  await fetchItems();
  const accordionItems = state.value.items.map((item) => {
    const { heading, content } = item;
    return { heading, content };
  });
  items.value = accordionItems;
});
</script>
