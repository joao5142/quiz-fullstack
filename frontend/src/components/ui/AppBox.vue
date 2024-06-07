<template>
  <div
    aria-label="card"
    class="card"
    :class="`${computedBackgroundClass} ${computedShadowClass} ${computedHoverShadowClass} ${computedBorderCardClass} ${computedDisabledClass}`"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ColorTypes } from '@/plugins/vuetify'

interface IProps {
  background?: ColorTypes
  shadow?: boolean
  hoverEffect?: boolean
  borderColor?: ColorTypes
  disabled?: boolean
}
const props = withDefaults(defineProps<IProps>(), {
  background: 'box',
  shadow: false,
  hoverEffect: false,
  borderColor: 'box',
  disabled: false,
})

const computedBackgroundClass = computed(() => {
  return `bg-${props.background}`
})

const computedBorderCardClass = computed(() => {
  return `border-${props.borderColor}`
})

const computedShadowClass = computed(() => {
  if (props.shadow !== undefined && props.shadow) {
    return `card--shadow`
  }

  return ''
})

const computedHoverShadowClass = computed(() => {
  if (props.hoverEffect !== undefined && props.hoverEffect) {
    return `card--hover`
  }

  return ''
})

const computedDisabledClass = computed(() => {
  if (props.disabled !== undefined && props.disabled) {
    return `card--disabled`
  }

  return ''
})
</script>

<style scoped lang="scss">
@use '@/styles/_variables' as variables;

.card {
  position: relative;

  width: 100%;

  border-radius: variables.$defaultBorderRadiusComponents;

  border: 1px solid rgb(var(--v-border-color));

  background: rgb(var(--v-theme-box));

  &--shadow,
  &--hover:hover {
    transition: all 0.3s ease;
    box-shadow: 0px 4px 20px #00000010;
  }

  &--disabled {
    pointer-events: none;
  }
}
</style>
