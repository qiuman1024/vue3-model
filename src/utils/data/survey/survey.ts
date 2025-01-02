import type { Survey } from '@/types/survey'
import page from '@/utils/data/surveyPage/page'
import { cloneDeep } from 'lodash'

export const defaultSurveyData: Survey = {
  title: '问卷',
  description: '',
  pages: [cloneDeep(new page().defaultProps)],
}

export default class survey {
  constructor() {}
  get defaultProps() {
    return cloneDeep(defaultSurveyData)
  }
}
