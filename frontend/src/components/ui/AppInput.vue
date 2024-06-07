<template>
  <input class="input" />
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.input {
  outline: 0;

  font-size: var(--v-theme-font-size-sm);

  background-color: rgb(var(--v-theme-dark-300));

  padding: 0.6rem 1rem;

  border-radius: 24px;

  border: 1px solid transparent;

  &::placeholder {
    color: rgb(var(--v-theme-gray-600));
  }

  &:focus {
    border: 1px solid rgb(var(--v-theme-blue-700));
  }
}
</style>
