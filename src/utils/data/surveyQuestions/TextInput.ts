import type { InputQuestion } from '@/types/survey'
import { QuestionType } from '@/types/survey'
import baseQuestion from './Basic'

const defaultInputData: Partial<InputQuestion> = {
  type: QuestionType.TEXT_INPUT,
  title: '单行输入框',
  placeholder: '',
}

export default class inputQuestion extends baseQuestion {
  constructor() {
    super()
  }
  get defaultProps() {
    return defaultInputData
  }
}
