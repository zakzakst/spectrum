<template>
  <div class="accordion-item">
    <h3 class="heading">
      <button class="header">
        <i class="icon" />
        <slot name="heading" />
      </button>
    </h3>
    <div class="content">
      <slot name="content" />
    </div>
  </div>
</template>

<!-- <script setup lang="ts"></script> -->

<style lang="scss" scoped>
.accordion-item {
  color: $color-test;
}
</style>
