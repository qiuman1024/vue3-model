import type { RadioGroupQuestion, PropsConfigGroup } from '@/types/survey'
import { QuestionType } from '@/types/survey'
import commonQuestion from './Common'

const defaultRadioGroupData: Partial<RadioGroupQuestion> = {
  type: QuestionType.RADIO_GROUP,
  title: '单选组',
  showNoneItem: false,
  noneText: '无',
  showOtherItem: false,
  otherText: '其他',
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

const propsConfig: PropsConfigGroup[] = [
  {
    name: '控件属性',
    children: [
      {
        title: '默认值',
        type: 'select',
        propsKey: 'value',
        optionsKey: 'choices',
      },
      {
        title: '选项列表',
        type: 'list',
        propsKey: 'choices',
      },
      {
        title: '添加其他',
        type: 'switch',
        propsKey: 'showOtherItem',
      },
      {
        title: '其他文本',
        type: 'input',
        propsKey: 'otherText',
      },
      {
        title: '添加空值',
        type: 'switch',
        propsKey: 'showNoneItem',
      },
      {
        title: '空值文本',
        type: 'input',
        propsKey: 'noneText',
      },
    ],
  },
]

export default class radioGroupQuestion extends commonQuestion {
  constructor() {
    super()
  }
  get defaultProps() {
    return defaultRadioGroupData
  }
  get defaultPropsConfig(): PropsConfigGroup[] {
    return propsConfig
  }
}
