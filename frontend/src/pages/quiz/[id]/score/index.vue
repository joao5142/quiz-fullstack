<template>
  <div>
    <v-row justify="center" align="start">
      <v-col cols="12" md="6">
        <app-text as="span" size="heading-l" weight="thin" class="d-block">
          Quiz completed
        </app-text>

        <app-text as="strong" size="heading-l" weight="bold"> You scored... </app-text>
      </v-col>
      <v-col cols="12" md="6">
        <app-box class="pa-4 d-flex flex-column align-center">
          <app-quiz-category :category="quiz!.categorySlug"></app-quiz-category>

          <app-text class="line-height-normal mt-6" as="strong" size="display" weight="bold">{{
            quiz?.correctQuestions
          }}</app-text>
          <app-text as="span" size="body-m" weight="semibold" color="grey-navy"
            >out of {{ quiz?.totalQuestions }}</app-text
          >
        </app-box>
        <app-button background="purple" size="xl" class="w-100 mt-5" @click="handleNavigateToHome">
          <app-text as="span" weight="medium" size="heading-s" color="pure-white">
            Play Again
          </app-text>
        </app-button>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useQuizStore } from '@/stores/quizStore'

definePageMeta({
  layout: 'default-view-layout',
})

const quizStore = useQuizStore()

const { quiz } = storeToRefs(quizStore)

const quizId = Number(useRoute().params.id)

async function handleNavigateToHome() {
  await navigateTo('/')
}

quizStore.getQuizById(quizId)
</script>

<style scoped></style>
