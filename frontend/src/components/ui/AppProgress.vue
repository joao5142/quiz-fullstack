<template>
  <div class="progress">
    <div class="progress__inner"></div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  progress: number
}
const props = defineProps<IProps>()

const progressPercentage = computed(() => {
  return `${props.progress}%`
})
</script>

<style scoped lang="scss">
@use '@/styles/_variables' as variables;

.progress {
  border-radius: variables.$defaultBorderRadiusComponents;
  height: 10px;
  width: 100%;
  background: rgb(var(--v-theme-pure-white));

  &__inner {
    border-radius: inherit;

    background: rgb(var(--v-theme-purple));
    width: v-bind(progressPercentage);
    height: 100%;
  }
}
</style>
