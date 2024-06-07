<template>
  <component :is="props.as" :class="`text ${computedClasses}`"><slot></slot></component>
</template>

<script setup lang="ts">
import { FontWeightTypes, FontSizesTypes, ColorTypes } from '@/plugins/vuetify'

export type TextTagTypes = 'p' | 'span' | 'strong' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h5'

interface IProps {
  as?: TextTagTypes
  size?: FontSizesTypes
  weight?: FontWeightTypes
  color?: ColorTypes
}

const props = withDefaults(defineProps<IProps>(), {
  as: 'p',
  weight: 'thin',
  color: 'text-dark',
  size: 'body-m',
})

const customSizeClass = computed(() => {
  let classStr = ''

  switch (props.size) {
    case 'heading-s':
      classStr = 'app-font-size-heading-s'
      break

    case 'heading-l':
      classStr = 'app-font-size-heading-l'
      break

    case 'heading-m':
      classStr = 'app-font-size-heading-m'
      break

    case 'display':
      classStr = 'app-font-size-display'
      break

    case 'body-m':
      classStr = 'app-font-size-body-m'
      break

    case 'body-s':
      classStr = 'app-font-size-body-s'
      break
  }

  return classStr
})

const customWeightClass = computed(() => {
  let classStr = ''
  switch (props.weight) {
    case 'regular':
      classStr = 'app-font-weight-regular'
      break

    case 'medium':
      classStr = 'app-font-weight-medium'
      break

    case 'semibold':
      classStr = 'app-font-weight-semibold'
      break

    case 'bold':
      classStr = 'app-font-weight-bold'
      break

    case 'thin':
      classStr = 'app-font-weight-thin'
      break
  }

  return classStr
})

const colorClass = computed(() => {
  return `text-${props.color}`
})

const computedClasses = computed(() => {
  return `${customSizeClass.value} ${customWeightClass.value} ${colorClass.value}`
})
</script>

<style lang="scss" scoped>
.button--disabled > .text {
  color: rgb(var(--v-theme-text-500)) !important;
}
</style>
