import { QuestionType } from '@/types/survey'
import type { QuestionItem } from '@/types/survey'
import survey from '@/utils/data/survey/survey'
import page from '@/utils/data/surveyPage/page'
const importModules: Record<string, { default: any }> = import.meta.glob(
  '@/utils/data/surveyQuestions/*',
  {
    eager: true,
  },
)
const modules: Record<string, any> = {}

for (const path in importModules) {
  const module = importModules[path]
  const moduleName = path.split('/').pop()?.replace('.ts', '') || ''

  modules[moduleName] = module.default
}

export default class GetSurveyData {
  static createSurvey() {
    return new survey().defaultProps
  }
  static createPage() {
    return new page().defaultProps
  }
  static createQuestion(type: QuestionType): QuestionItem {
    if (!modules[type]) {
      type = QuestionType.TEXT_INPUT // 默认文本输入
    }
    const data = new modules[type]()
    const questionItem: QuestionItem = {
      props: data.props,
      propsConfig: data.propsConfig,
    }
    return questionItem
  }
}
