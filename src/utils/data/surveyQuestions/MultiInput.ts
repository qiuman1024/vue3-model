import type { MultiInputQuestion, PropsConfigGroup } from '@/types/survey'
import { QuestionType } from '@/types/survey'
import commonQuestion from './Common'

const defaultMultiInputData: Partial<MultiInputQuestion> = {
  type: QuestionType.MULTI_INPUT,
  title: '多行输入框',
  required: false,
  visible: true,
  readOnly: false,
}

const propsConfig: PropsConfigGroup[] = [
  {
    name: '控件属性',
    children: [
      {
        title: '默认值',
        type: 'textarea',
        propsKey: 'value',
      },
      {
        title: '占位符',
        type: 'input',
        propsKey: 'placeholder',
      },
    ],
  },
]

export default class multiInputQuestion extends commonQuestion {
  constructor() {
    super()
  }
  get defaultProps() {
    return defaultMultiInputData
  }
  get defaultPropsConfig(): PropsConfigGroup[] {
    return propsConfig
  }
}
