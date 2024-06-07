<template>
  <button class="button" :class="styleClasses" @click="!disabled ? $emit('click') : ''">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { ColorTypes } from '@/plugins/vuetify'

interface IProps {
  disabled?: boolean
  outlined?: boolean
  full?: boolean
  fab?: boolean
  rounded?: boolean
  borderColor?: ColorTypes
  color?: ColorTypes
  background?: ColorTypes
  size?: 'xl' | 'lg' | 'md' | 'sm'

  transparent?: boolean
  glow?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  size: 'md',
  background: 'grey-50',
  glow: false,
})

const styleClasses = computed(() => {
  let stringClass = ''

  if (props.full !== undefined && props.full) {
    stringClass += 'button--full '
  }

  if (props.disabled && props.disabled === true) {
    stringClass += 'button--disabled '
  }

  if (props.color !== undefined) {
    stringClass += `text-${props.color} `
  }

  if (props.background !== undefined && !props.outlined) {
    stringClass += `bg-${props.background} `
  }

  if (props.outlined !== undefined && props.outlined) {
    stringClass += 'button--outlined  '
  }

  if (props.borderColor !== undefined && props.borderColor) {
    stringClass += `button--border border-${props.borderColor} `
  }

  if (props.size) {
    stringClass += `button--size-${props.size} `
  }

  if (props.fab !== undefined && props.fab) {
    stringClass += 'button--fab '
  }

  if (props.transparent !== undefined && props.transparent) {
    stringClass += 'button--transparent '
  }

  if (props.rounded !== undefined && props.rounded) {
    stringClass += 'button--rounded '
  }

  if (props.glow !== undefined && props.glow) {
    stringClass += 'button--glow '
  }

  return stringClass
})
</script>

<style scoped lang="scss">
@use '@/styles/_variables' as variables;

.button {
  font-weight: 400;
  font-size: var(--v-theme-font-size-sm);
  text-transform: none;

  transition: all 0.3s linear;

  border-radius: variables.$defaultBorderRadiusComponents;

  border-color: rgb(var(--v-border-color));

  display: flex;
  align-items: center;
  justify-content: center;

  width: max-content;

  &:active {
    scale: 0.98;
  }

  &--outlined {
    border-width: 1px;
    border-style: solid;

    background: none !important;
  }

  &--disabled {
    pointer-events: none;
    background-color: rgb(var(--v-theme-gray-100)) !important;

    color: rgb(var(--v-theme-text-500)) !important;

    > * {
      color: rgb(var(--v-theme-text-500)) !important;
    }
  }

  &.button--outlined.button--disabled {
    border-color: rgb(var(--v-theme-gray-100));
    background-color: transparent !important;
    color: rgb(var(--v-theme-text-500)) !important;
  }

  &--full {
    width: 100%;
  }

  &--size-xl {
    padding: 1.25rem;
  }
  &--size-lg {
    padding: 1rem;
  }
  &--size-md {
    padding: 0.75rem;
  }
  &--size-sm {
    padding: 0.625rem;
  }

  &--fab {
    border-radius: 10px;
  }

  &--border {
    border-width: 1px;
    border-style: solid;
  }

  &--transparent {
    background: transparent !important;
  }

  &--rounded {
    border-radius: 50% !important;
  }

  &--glow {
    box-shadow: 0px 5px 10px #4589f740;
  }
}
</style>
