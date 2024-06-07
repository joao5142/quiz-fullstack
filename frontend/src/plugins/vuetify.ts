import '@mdi/font/css/materialdesignicons.css'

import { createVuetify, ThemeDefinition } from 'vuetify'

import { defineNuxtPlugin } from '#app'

import { DefaultTheme } from '@/theme'

const themeInUse = DefaultTheme

export const vuetifyFontSizesVariables = {
  'theme-font-size-heading-s': themeInUse.fontSizes['heading-s'],
  'theme-font-size-heading-m': themeInUse.fontSizes['heading-m'],
  'theme-font-size-heading-l': themeInUse.fontSizes['heading-l'],
  'theme-font-size-body-s': themeInUse.fontSizes['body-s'],
  'theme-font-size-body-m': themeInUse.fontSizes['body-m'],
  'theme-font-size-display': themeInUse.fontSizes.display,
} as const

export const vuetifyFontWeightVariables = {
  'theme-font-weight-thin': themeInUse.fontWeights.thin,
  'theme-font-weight-regular': themeInUse.fontWeights.regular,
  'theme-font-weight-medium': themeInUse.fontWeights.medium,
  'theme-font-weight-semibold': themeInUse.fontWeights.semibold,
  'theme-font-weight-bold': themeInUse.fontWeights.bold,
} as const

const variablesTheme = {
  ...vuetifyFontSizesVariables,
  ...vuetifyFontWeightVariables,
}

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: { ...themeInUse.colors.light },
  variables: {
    ...variablesTheme,
    'background-img': '../assets/images/pattern-background-desktop-light.svg',
  },
}
const darkTheme: ThemeDefinition = {
  dark: true,
  colors: { ...themeInUse.colors.dark },
  variables: {
    ...variablesTheme,
    'background-img': '../assets/images/pattern-background-desktop-dark.svg',
  },
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
    },

    defaults: {},
  })
  app.vueApp.use(vuetify)
})

type DefaultColorTypes = typeof themeInUse.colors.light
type CustomColorTypes = typeof themeInUse.colors.light

export type ColorTypes = keyof (DefaultColorTypes & CustomColorTypes)
export type FontSizesTypes = keyof typeof themeInUse.fontSizes
export type FontWeightTypes = keyof typeof themeInUse.fontWeights
export type FontFamilyTypes = keyof typeof themeInUse.fontFamily
