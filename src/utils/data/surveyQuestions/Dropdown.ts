import type { DropdownQuestion } from '@/types/survey'
import { QuestionType } from '@/types/survey'
import baseQuestion from './Basic'

const defaultDropdownData: Partial<DropdownQuestion> = {
  type: QuestionType.DROPDOWN,
  title: '下拉框',
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

export default class dropdownQuestion extends baseQuestion {
  constructor() {
    super()
  }
  get defaultProps() {
    return defaultDropdownData
  }
}
