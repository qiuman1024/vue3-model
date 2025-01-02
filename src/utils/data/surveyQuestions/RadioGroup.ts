import type { RadioGroupQuestion } from '@/types/survey'
import { QuestionType } from '@/types/survey'
import baseQuestion from './Basic'

const defaultRadioGroupData: Partial<RadioGroupQuestion> = {
  type: QuestionType.RADIO_GROUP,
  title: '单选组',
  showNoneItem: false,
  showOtherItem: false,
  choices: [
    {
      label: '选项1',
      value: '选项1',
    },
    {
      label: '选项2',
      value: '选项2',
    },
  ],
}

export default class radioGroupQuestion extends baseQuestion {
  constructor() {
    super()
  }
  get defaultProps() {
    return defaultRadioGroupData
  }
}
