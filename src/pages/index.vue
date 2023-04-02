<template>
  <div class="page">
    <AccordionItem>
      <template v-slot:heading>見出し</template>
      <template v-slot:content>コンテンツ</template>
    </AccordionItem>
  </div>
</template>

<script setup lang="ts">
import AccordionItem from "@/components/molecules/AccordionItem.vue";
</script>
