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
        <app-box class="pa-4 d-flex flex-column align-center justify-center">
          <app-quiz-category category="html"></app-quiz-category>

          <app-text as="strong" size="display" weight="bold">8</app-text>
          <app-text>out of 10</app-text>
        </app-box>
        <app-button background="purple" size="xl" class="w-100 mt-5">
          <app-text as="span" weight="medium" size="heading-s" color="pure-white">
            Play Again
          </app-text>
        </app-button>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default-view-layout',
})
</script>

<style scoped></style>
