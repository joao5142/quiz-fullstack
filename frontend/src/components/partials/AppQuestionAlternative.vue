<template>
  <div>
    <app-box
      class="alternatives__alternative"
      :border-color="getBorderColorBySelectedAlternative(alternative.slug)"
      shadow
      :disabled="isFinished"
      @click="$emit('select:alternative', alternative.slug)"
    >
      <div class="d-flex align-center">
        <app-button
          fab
          :background="getButtonColorBySelectedAlternative(alternative.slug)"
          size="sm"
          class="px-4 me-5 d-flex align-center justify-center"
        >
          <strong>{{ alternative.slug }}</strong>
        </app-button>

        <app-text>{{ alternative.text }}</app-text>
      </div>

      <div v-if="isFinished">
        <img
          v-if="alternative.slug === correctAlternative"
          :src="IconCorrect"
          class="alternative__icon"
        />
        <img
          v-if="alternative.slug === markedAlternative && alternative.slug !== correctAlternative"
          :src="IconIncorrect"
          class="alternative__icon"
        />
      </div>
    </app-box>
  </div>
</template>

<script setup lang="ts">
import { AlternativeSlugTypes } from '../../types/globals/question'
import IconCorrect from '@/assets/images/icon-correct.svg?url_default'
import IconIncorrect from '@/assets/images/icon-incorrect.svg?url_default'
import { ColorTypes } from '@/plugins/vuetify'

type EmitTypes = {
  'select:alternative': [value: AlternativeSlugTypes]
}

defineEmits<EmitTypes>()

interface IProps {
  alternative: { slug: AlternativeSlugTypes; text: string }
  markedAlternative?: string
  correctAlternative?: string
  isFinished?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  markedAlternative: '',
  correctAlternative: '',
})

function getBorderColorBySelectedAlternative(alternative: string): ColorTypes {
  if (props.isFinished) {
    if (alternative === props.correctAlternative && alternative === props.markedAlternative) {
      return 'green'
    } else if (alternative === props.markedAlternative) {
      return 'red'
    }
  } else if (alternative === props.markedAlternative) {
    return 'purple'
  }

  return 'pure-white'
}

function getButtonColorBySelectedAlternative(alternative: string): ColorTypes {
  if (props.isFinished) {
    if (alternative === props.correctAlternative && alternative === props.markedAlternative) {
      return 'green'
    } else if (alternative === props.markedAlternative) {
      return 'red'
    }
  }

  return 'grey-50'
}
</script>

<style scoped lang="scss">
.alternatives {
  &__alternative {
    cursor: pointer;

    min-height: 4rem;

    margin-top: 0.7rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.7rem 1.4rem;

    border-width: 3px;

    strong {
      text-transform: capitalize;
    }
  }

  &__icon {
    width: 50px;
    height: 50px;
  }
}
</style>
