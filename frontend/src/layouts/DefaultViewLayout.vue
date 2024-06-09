<template>
  <app-container>
    <app-header class="mb-15"></app-header>

    <app-loading v-if="isPageLoading" />

    <slot></slot>

    <vite-pwa-manifest></vite-pwa-manifest>
  </app-container>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useLoadingStore } from '@/stores/loadingStore'

const { initTheme } = useToggleTheme()

const loadingStore = useLoadingStore()

const { isPageLoading } = storeToRefs(loadingStore)

onBeforeMount(() => {
  initTheme()
})
</script>

<style scoped></style>
