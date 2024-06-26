<template>
  <div class="d-flex align-center justify-space-between mt-15">
    <v-menu>
      <template #activator="{ props }">
        <app-button class="me-6" v-bind="props" transparent>
          <img :src="TranslateIcon" alt="Translate" width="25" />
        </app-button>
      </template>
      <v-list elevation="0">
        <v-list-item
          v-for="localeItem in availableLocales"
          :key="typeof localeItem == 'object' ? localeItem.code : localeItem"
          @click="setLocale(typeof localeItem == 'object' ? localeItem.code : localeItem)"
        >
          <div class="d-flex gap-20">
            <app-text>
              {{ typeof localeItem == 'object' ? localeItem.name : localeItem }}
            </app-text>

            <img :src="localeItem.image" alt="Locale" width="30" />
          </div>
        </v-list-item>
      </v-list>
    </v-menu>

    <div class="d-flex">
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
  </div>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'

import IconSunDark from '@/assets/images/icon-sun-dark.svg?url_default'
import IconSunLight from '@/assets/images/icon-sun-light.svg?url_default'
import IconMoonDark from '@/assets/images/icon-moon-dark.svg?url_default'
import IconMoonLight from '@/assets/images/icon-moon-light.svg?url_default'
import TranslateIcon from '@/assets/images/translate2.png?url_default'

const { locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return locales.value
})

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
