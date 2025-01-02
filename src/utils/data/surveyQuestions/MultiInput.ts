import type { MultiInputQuestion } from '@/types/survey'
import { QuestionType } from '@/types/survey'
import baseQuestion from './Basic'

const defaultMultiInputData: MultiInputQuestion = {
  type: QuestionType.MULTI_INPUT,
  name: 'id',
  title: '多行输入框',
  required: false,
  visible: true,
  readOnly: false,
}

export default class multiInputQuestion extends baseQuestion {
  constructor() {
    super()
  }
  get defaultProps() {
    return defaultMultiInputData
  }
}
