<template>
  <div>
    <v-row>
      <v-col cols="12" md="6" class="d-flex flex-column justify-space-between">
        <div>
          <app-text as="span" class="d-block">Question 6 of 10</app-text>
          <app-text as="strong" size="heading-m" weight="semibold">
            Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement
            for normal text?
          </app-text>
        </div>
        <app-progress :progress="30" class="mb-16"></app-progress>
      </v-col>
      <v-col cols="12" md="6">
        <v-radio-group v-model="selectedAlternative" class="alternatives">
          <app-question-alternative
            v-for="(alternative, index) in question.alternatives"
            :key="'alternatives' + index"
            correct-alternative="b"
            :marked-alternative="selectedAlternative"
            :alternative="alternative"
            :is-finished="true"
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
import { IQuestion } from '~/types/globals/question'

definePageMeta({
  layout: 'default-view-layout',
})

const question = ref<IQuestion>({
  description: '',
  alternatives: [
    { slug: 'a', text: 'aaaa' },
    { slug: 'b', text: 'asdas' },
    { slug: 'c', text: 'cvbvc' },
    { slug: 'd', text: 'cvbcvbcv' },
    { slug: 'e', text: 'aaaa' },
  ],
  category: 'html',
  name: 'Question 122',
})

const selectedAlternative = ref<string>('a')
</script>

<style scoped></style>
