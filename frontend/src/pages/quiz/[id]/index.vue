<template>
  <div>
    <v-row>
      <v-col cols="12" md="6" class="d-flex gap-20 flex-column justify-space-between">
        <div v-if="isRequestLoading && !quiz">
          <v-skeleton-loader max-width="300" type="list-item"></v-skeleton-loader>

          <v-skeleton-loader max-width="300" type="text"></v-skeleton-loader>
        </div>

        <div v-else>
          <app-text as="span" class="d-block"
            >Question {{ pagination.page }} of {{ quiz?.totalQuestions }}</app-text
          >
          <app-text as="strong" size="heading-m" weight="semibold">
            {{ quizQuestion?.question?.description }}
          </app-text>
        </div>

        <app-progress :progress="quizProgress" class="mb-3 mb-md-16"></app-progress>
      </v-col>

      <v-col cols="12" md="6">
        <div v-if="isRequestLoading && !quizQuestion!.question">
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
            :correct-alternative="quizQuestion?.question?.correctAlternative"
            :marked-alternative="selectedAlternative"
            :alternative="alternative"
            :is-finished="Boolean(quizQuestion?.markedAlternative)"
            @select:alternative="selectedAlternative = $event"
          ></app-question-alternative>
        </v-radio-group>

        <app-button
          v-if="!Boolean(quizQuestion?.markedAlternative)"
          background="purple"
          size="xl"
          class="w-100"
          @click="handleSubmitQuestion"
        >
          <app-text as="span" weight="medium" size="heading-s" color="pure-white">
            Submit Answer
          </app-text>
        </app-button>

        <app-button
          v-else-if="pagination.page < quiz!.totalQuestions"
          background="purple"
          size="xl"
          class="w-100"
          @click="handleGotToNextQuestion"
        >
          <app-text as="span" weight="medium" size="heading-s" color="pure-white">
            Next Question
          </app-text>
        </app-button>

        <app-button v-else background="purple" size="xl" class="w-100" @click="handleFinishQuiz">
          <app-text as="span" weight="medium" size="heading-s" color="pure-white">
            Finish Quiz
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

  middleware: ['check-quiz-status'],
})

const { showToastSuccess } = useToast()

const quizStore = useQuizStore()

const { quiz } = storeToRefs(quizStore)

const loadingStore = useLoadingStore()
const { isRequestLoading } = storeToRefs(loadingStore)

const quizId = Number(useRoute().params.id)

const pagination = ref({
  page: 1,
  nextPage: 0,
})

interface IQuizQuestion {
  question: IQuestion
  markedAlternative: AlternativeSlugTypes
  questionId: number
  quizId: number
}
const quizQuestion = ref<IQuizQuestion | null>()

interface IAlternative {
  slug: AlternativeSlugTypes
  text: string
}

const selectedAlternative = ref<AlternativeSlugTypes>('a')

const alternatives = computed<IAlternative[] | null>(() => {
  if (quizQuestion.value?.question) {
    return [
      {
        slug: 'a',
        text: quizQuestion.value?.question.alternativeA,
      },
      {
        slug: 'b',
        text: quizQuestion.value?.question.alternativeB,
      },
      {
        slug: 'c',
        text: quizQuestion.value?.question.alternativeC,
      },
      {
        slug: 'd',
        text: quizQuestion.value?.question.alternativeD,
      },
      {
        slug: 'e',
        text: quizQuestion.value?.question.alternativeE,
      },
    ]
  } else {
    return null
  }
})

const quizProgress = computed(() => {
  if (pagination.value.page && quiz?.value?.totalQuestions) {
    return Number(pagination.value.page / quiz.value!.totalQuestions) * 100
  }

  return 0
})

async function getPaginatedQuestion(page?: number) {
  try {
    const data = await QuizServices.getPaginatedQuestions({
      quizId,
      page: page || pagination.value.page,
    })

    console.log(data)

    quizQuestion.value = data!.data[0]

    pagination.value.page = data!.page
    pagination.value.nextPage = data!.nextPage
  } catch (err) {
    console.log(err)
  }
}

async function handleSubmitQuestion() {
  try {
    const questionData = await QuizServices.markQuizQuestion({
      quizId,
      questionId: quizQuestion.value!.question!.id,
      markedAlternative: selectedAlternative.value,
    })

    if (questionData) {
      getPaginatedQuestion()
    }
  } catch (err) {
    console.log(err)
  }
}

async function handleGotToNextQuestion() {
  try {
    await getPaginatedQuestion(pagination.value.nextPage)
  } catch (err) {
    console.log(err)
  }
}

async function handleFinishQuiz() {
  try {
    const quiz = await QuizServices.finishQuiz(quizId)

    if (quiz) {
      showToastSuccess('Quiz finalizado com sucesso', 1000, async () => {
        await navigateTo(`/quiz/${quizId}/score`)
      })
    }
  } catch (err) {
    console.log(err)
  }
}

await Promise.all([getPaginatedQuestion(), quizStore.getQuizById(quizId)])
</script>

<style scoped></style>
