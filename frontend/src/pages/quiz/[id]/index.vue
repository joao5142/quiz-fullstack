<template>
  <div>
    <v-row>
      <v-col cols="12" md="6" class="d-flex flex-column justify-space-between">
        <div v-if="isRequestLoading">
          <v-skeleton-loader max-width="300" type="list-item"></v-skeleton-loader>

          <v-skeleton-loader max-width="300" type="text"></v-skeleton-loader>
        </div>

        <div v-else>
          <app-text as="span" class="d-block"
            >Question {{ pagination.page }} of {{ quiz?.totalQuestions }}</app-text
          >
          <app-text as="strong" size="heading-m" weight="semibold">
            {{ question?.description }}
          </app-text>
        </div>

        <app-progress :progress="quizProgress" class="mb-16"></app-progress>
      </v-col>

      <v-col cols="12" md="6">
        <div v-if="isRequestLoading">
          <v-skeleton-loader
            v-for="item in 4"
            :key="'skeleton' + item"
            height="100px"
            type="list-item"
          ></v-skeleton-loader>
        </div>

        <v-radio-group v-else v-model="selectedAlternative" class="alternatives">
          <app-question-alternative
            v-for="(alternative, index) in alternatives"
            :key="'alternatives' + index"
            :correct-alternative="question?.correctAlternative"
            :marked-alternative="selectedAlternative"
            :alternative="alternative"
            :is-finished="Boolean(question!.markedAlternative)"
            @select:alternative="selectedAlternative = $event"
          ></app-question-alternative>
        </v-radio-group>

        <app-button background="purple" size="xl" class="w-100">
          <app-text as="span" weight="medium" size="heading-s" color="pure-white">
            Submit Answer
          </app-text>
        </app-button>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useQuizStore } from '@/stores/quizStore'
import { AlternativeSlugTypes, IQuestion } from '@/types/globals/question'
import { useLoadingStore } from '@/stores/loadingStore'
import { QuizServices } from '@/services/QuizServices'

definePageMeta({
  layout: 'default-view-layout',
})

const loadingStore = useLoadingStore()
const { isRequestLoading } = storeToRefs(loadingStore)

const quizId = Number(useRoute().params.id)

const quizStore = useQuizStore()
const { quiz } = storeToRefs(quizStore)

const pagination = ref({
  page: 1,
})

const question = ref<IQuestion | null>()

interface IAlternative {
  slug: AlternativeSlugTypes
  text: string
}
const alternatives = computed<IAlternative[] | null>(() => {
  if (question.value) {
    return [
      {
        slug: 'a',
        text: question.value.alternativeA,
      },
      {
        slug: 'b',
        text: question.value.alternativeB,
      },
      {
        slug: 'c',
        text: question.value.alternativeC,
      },
      {
        slug: 'd',
        text: question.value.alternativeD,
      },
      {
        slug: 'e',
        text: question.value.alternativeE,
      },
    ]
  } else {
    return null
  }
})

const selectedAlternative = ref<AlternativeSlugTypes>('a')

const quizProgress = computed(() => {
  if (pagination.value.page && quiz?.value?.totalQuestions) {
    return Number(pagination.value.page / quiz.value!.totalQuestions) * 100
  }

  return 0
})

async function getPaginatedQuestion() {
  try {
    const data = await QuizServices.getPaginatedQuestions({
      quizId,
      page: pagination.value.page,
    })

    console.log(data)

    question.value = data!.data[0].question
  } catch (err) {
    console.log(err)
  }
}
async function getQuizById() {
  try {
    const quiz = await QuizServices.getById(quizId)

    if (quiz) {
      quizStore.setQuiz(quiz)
    }
  } catch (err) {
    console.log(err)
  }
}

await Promise.all([getPaginatedQuestion(), getQuizById()])
</script>

<style scoped></style>
