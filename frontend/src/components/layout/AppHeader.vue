<template>
  <div class="d-flex justify-end mt-15">
    <img :src="darkModeOn ? IconSunLight : IconSunDark" alt="" />
    <v-switch
      v-model="darkModeOn"
      class="mx-5"
      color="purple"
      hide-details
      inset
      @change="handleToggleTheme"
    ></v-switch>
    <img :src="darkModeOn ? IconMoonLight : IconMoonDark" alt="" />
  </div>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
import IconSunDark from '@/assets/images/icon-sun-dark.svg?url_default'
import IconSunLight from '@/assets/images/icon-sun-light.svg?url_default'
import IconMoonDark from '@/assets/images/icon-moon-dark.svg?url_default'
import IconMoonLight from '@/assets/images/icon-moon-light.svg?url_default'

const { setTheme } = useToggleTheme()
const theme = useTheme()

const darkModeOn = ref<boolean>()

const isDarkMode = computed(() => {
  return theme.current.value.dark
})

function handleToggleTheme() {
  if (isDarkMode.value) {
    setTheme('light')
  } else {
    setTheme('dark')
  }
}

onMounted(() => {
  if (isDarkMode.value) {
    darkModeOn.value = true
  }
})
</script>

<style scoped></style>
