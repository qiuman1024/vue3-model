<script setup lang="ts">
import Question from './Question.vue'
import { useSurey } from '../hooks/useSurey'
const { surveyData, currentPageIndex, currentQuestion } = useSurey()
console.log(surveyData.value)
</script>
<template>
  <div class="overflow-y-auto h-full">
    <!-- 问卷标题 s -->
    <div class="mb-2">
      <h1 class="text-center text-2xl">{{ surveyData.title }}</h1>
      <div
        v-if="surveyData.description"
        class="text-center text-sm text-gray-500"
      >
        {{ surveyData.description }}
      </div>
    </div>
    <!-- 问卷标题 e -->

    <!-- 页码标题 s -->
    <div v-for="page in surveyData.pages" :key="page.id">
      <div class="text-base">{{ page.title }}</div>
      <div v-if="page.description" class="text-center text-sm text-gray-500">
        {{ page.description }}
      </div>
      <div class="mt-5">
        <!-- 问题 s -->
        <Question
          v-for="(question, index) in page.questions ?? []"
          :question="question"
          :key="question.id"
          v-model="(page.questions ??= [])[index]"
        ></Question>
        <!-- 问题 e -->
      </div>
    </div>
    <!-- 页码标题 e -->
  </div>
</template>
