<template>
  <div>
    <v-row justify="center" align="start">
      <v-col cols="12" md="6">
        <app-text as="span" size="heading-l" weight="thin" class="d-block">
          Welcome to the
        </app-text>

        <app-text as="strong" size="heading-l" weight="bold"> Frontend Quiz! </app-text>

        <app-text color="text-light">Pick a subject to get started.</app-text>
      </v-col>
      <v-col cols="12" md="6">
        <app-box
          v-for="(category, index) in questionCategories"
          :key="'category' + index"
          class="pa-5 mb-5 d-flex align-center cursor-pointer"
          @click="handleNavigateToQuizCategory"
        >
          <app-quiz-category :category="category"></app-quiz-category>
        </app-box>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { QuizCategoryTypes } from '../types/globals/quiz'
import { QuizServices } from '../services/QuizServices'

definePageMeta({
  layout: 'default-view-layout',
})

const questionCategories: QuizCategoryTypes[] = ['html', 'css', 'js', 'accessibility']

async function handleNavigateToQuizCategory(category: QuizCategoryTypes) {
  try {
    const quiz = await QuizServices.createQuiz(category)

    await navigateTo('/quiz/1')
  } catch (err) {}
}
</script>

<style scoped lang="scss"></style>
