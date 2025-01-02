import { ref } from 'vue'
import type { Survey, Page, Question } from '@/types/survey'
import GetSurveyData from '@/utils/data/createSurvey'
import { cloneDeep } from 'lodash'

const surveyData = ref<Survey>(cloneDeep(GetSurveyData.createSurvey()))
const currentPageIndex = ref(0)

export function useSurey() {
  const currentQuestion = ref<Question>()
  const addQuestion = (question: Question) => {
    surveyData.value.pages[currentPageIndex.value].questions?.push(question)
  }
  const removeQuestion = (question: Question) => {
    surveyData.value.pages[currentPageIndex.value].questions?.splice(
      surveyData.value.pages[currentPageIndex.value].questions?.indexOf(
        question,
      ) ?? 0,
      1,
    )
  }
  return {
    surveyData,
    currentPageIndex,
    currentQuestion,
    addQuestion,
    removeQuestion,
  }
}
