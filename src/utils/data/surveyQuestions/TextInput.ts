import type { InputQuestion, PropsConfigGroup } from '@/types/survey'
import { QuestionType } from '@/types/survey'
import commonQuestion from './Common'

const defaultInputData: Partial<InputQuestion> = {
  type: QuestionType.TEXT_INPUT,
  title: '单行输入框',
  placeholder: '',
}

const propsConfig: PropsConfigGroup[] = [
  {
    name: '控件属性',
    children: [
      {
        title: '默认值',
        type: 'input',
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

export default class inputQuestion extends commonQuestion {
  constructor() {
    super()
  }
  get defaultProps() {
    return defaultInputData
  }
  get defaultPropsConfig(): PropsConfigGroup[] {
    return propsConfig
  }
}
