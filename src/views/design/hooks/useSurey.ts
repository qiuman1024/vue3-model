import { ref } from 'vue'
import type { Survey, Page, Question, QuestionItem } from '@/types/survey'

import GetSurveyData from '@/utils/data/createSurvey'
import { cloneDeep } from 'lodash'

const surveyData = ref<Survey>(cloneDeep(GetSurveyData.createSurvey()))
const currentPageIndex = ref(0)
const currentQuestion = ref<QuestionItem>()

export function useSurey() {
  const addQuestion = (question: QuestionItem) => {
    surveyData.value.pages[currentPageIndex.value].questions?.push(question)
    currentQuestion.value = question
    console.log(currentQuestion.value)
  }
  const removeQuestion = (pageIndex: number, id: string) => {
    // 获取点击的题目的索引
    const index = surveyData.value.pages[pageIndex].questions?.findIndex(
      (it) => it.props.id === id,
    )
    // 删除该题目
    if (index === 0 || (index && index > -1)) {
      surveyData.value.pages[pageIndex].questions?.splice(index, 1)
    }

    console.log(currentQuestion.value?.props.id, id)
    if (currentQuestion.value?.props.id !== id) return

    // 处理当前题目被删除的情况
    // 获取所有页面的题目
    const allQuestions = surveyData.value.pages.reduce((acc, page) => {
      if (page.questions) {
        acc.push(...page.questions)
      }
      return acc
    }, [] as QuestionItem[])

    // 如果没有任何题目，设置为undefined
    if (allQuestions.length === 0) {
      currentQuestion.value = undefined
      return
    }

    // 获取当前题目在所有题目中的索引
    const currentIndex = allQuestions.findIndex((q) => q.props.id === id)

    // 设置新的当前题目
    if (currentIndex > 0) {
      currentQuestion.value = allQuestions[currentIndex - 1]
    } else {
      currentQuestion.value = allQuestions[0]
    }
  }
  return {
    surveyData,
    currentPageIndex,
    currentQuestion,
    addQuestion,
    removeQuestion,
  }
}
