<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  width: 100%;
  max-width: 1300px;
  padding-inline: 1rem;
}
</style>
