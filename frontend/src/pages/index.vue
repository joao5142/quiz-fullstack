<template>
  <div>
    <v-row justify="center" align="start">
      <v-col cols="12" md="6">
        <app-text as="span" size="heading-l" weight="thin" class="d-block">
          {{ t('title.one') }}
        </app-text>

        <app-text as="strong" size="heading-l" weight="bold">{{ t('title.two') }}</app-text>

        <app-text color="text-light">{{ t('subtitle') }}</app-text>
      </v-col>
      <v-col cols="12" md="6">
        <app-box
          v-for="(category, index) in questionCategories"
          :key="'category' + index"
          class="pa-5 mb-5 d-flex align-center cursor-pointer"
          @click="() => handleNavigateToQuizCategory(category)"
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
import { useQuizStore } from '../stores/quizStore'
import { QuizError } from '../exceptions/general/QuizError'
import { useLoadingStore } from '../stores/loadingStore'

definePageMeta({
  layout: 'default-view-layout',
})

const { t } = useI18n({
  useScope: 'local',
})

const { setQuiz } = useQuizStore()
const { showToastError } = useToast()

const loadingStore = useLoadingStore()

const questionCategories: QuizCategoryTypes[] = ['html', 'css', 'js', 'accessibility']

async function handleNavigateToQuizCategory(category: QuizCategoryTypes) {
  try {
    loadingStore.setIsPageLoading(true)
    const quiz = await QuizServices.createQuiz(category)

    if (quiz) {
      setQuiz(quiz!)
      await navigateTo(`/quiz/${quiz.id}`)
    } else {
      throw new QuizError('Error ao criar quiz')
    }
  } catch (err) {
    showToastError(err, 'Error ao criar quiz', 1000)
  } finally {
    loadingStore.setIsPageLoading(false)
  }
}
</script>

<i18n lang="json">
{
  "pt-BR": {
    "title": {
      "one": "Bem Vindo ao",
      "two": "Frontend Quiz!"
    },
    "subtitle": "Escolha um assunto para começar"
  },
  "en-US": {
    "title": {
      "one": "Welcome to the",
      "two": "Frontend Quiz!"
    },
    "subtitle": "Pick a subject to get started."
  },
  "es-ES": {
    "title": {
      "one": "Bienvenidos a",
      "two": "Frontend Quiz!"
    },
    "subtitle": "Elige un tema para empezar"
  }
}
</i18n>

<style scoped lang="scss"></style>
