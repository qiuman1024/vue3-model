import type { DropdownQuestion } from '@/types/survey'
import { QuestionType } from '@/types/survey'
import commonQuestion from './Common'

const defaultDropdownData: Partial<DropdownQuestion> = {
  type: QuestionType.DROPDOWN,
  title: '下拉框',
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

const propsConfig = [
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
        title: '占位符',
        type: 'input',
        propsKey: 'placeholder',
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

export default class dropdownQuestion extends commonQuestion {
  constructor() {
    super()
  }
  get defaultProps() {
    return defaultDropdownData
  }
  get defaultPropsConfig() {
    return propsConfig
  }
}
