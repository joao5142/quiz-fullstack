<template>
  <div class="d-flex align-center">
    <app-button fab :background="questionCategories[category].color" class="me-5">
      <img :src="questionCategories[category].icon" alt="" />
    </app-button>
    <app-text size="heading-s" weight="semibold">{{ questionCategories[category].text }}</app-text>
  </div>
</template>

<script setup lang="ts">
import { IQuestionCategoryItem } from '../../types/globals/question'
import HtmlImage from '@/assets/images/icon-html.svg?url_default'
import JsImage from '@/assets/images/icon-js.svg?url_default'
import CssImage from '@/assets/images/icon-css.svg?url_default'
import AccessibilityImage from '@/assets/images/icon-accessibility.svg?url_default'
import { QuizCategoryTypes } from '~/types/globals/quiz'

interface IProps {
  category: QuizCategoryTypes
}
defineProps<IProps>()

const questionCategories: Record<string, IQuestionCategoryItem> = {
  html: {
    text: 'HTML',
    slug: 'html',
    color: 'orange-50',
    icon: HtmlImage,
  },
  css: {
    text: 'Css',
    slug: 'css',
    color: 'green-50',
    icon: CssImage,
  },
  js: {
    text: 'Javascript',
    slug: 'js',
    color: 'blue-50',
    icon: JsImage,
  },
  accessibility: {
    text: 'Accessibility',
    slug: 'accessibility',
    color: 'purple-50',
    icon: AccessibilityImage,
  },
}
</script>

<style scoped></style>
