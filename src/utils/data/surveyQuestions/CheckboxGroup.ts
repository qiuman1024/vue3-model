import type { CheckboxGroupQuestion } from '@/types/survey'
import { QuestionType } from '@/types/survey'
import baseQuestion from './Basic'

const defaultCheckboxGroupData: Partial<CheckboxGroupQuestion> = {
  type: QuestionType.CHECKBOX_GROUP,
  title: '多选组',
  showNoneItem: false,
  showOtherItem: false,
  showSelectAllItem: false,
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

export default class checkboxGroupQuestion extends baseQuestion {
  constructor() {
    super()
  }
  get defaultProps() {
    return defaultCheckboxGroupData
  }
}
