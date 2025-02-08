import { nanoid } from 'nanoid'
import type { Question, PropsConfigGroup } from '@/types/survey'

// 通用属性
const commonProps: Partial<Question> = {
  id: nanoid(),
  title: '',
  description: '',
  remark: '',
  visible: true,
  readOnly: false,
  required: false,
  requiredIf: '',
  visibleIf: '',
  enableIf: '',
  value: '',
}

// 通用属性配置
const commonPropsConfig: PropsConfigGroup[] = [
  {
    name: '基本属性',
    children: [
      {
        title: '标题',
        type: 'input',
        propsKey: 'title',
      },
      {
        title: '描述',
        type: 'input',
        propsKey: 'description',
      },
      {
        title: '备注',
        type: 'input',
        propsKey: 'remark',
      },
      {
        title: '必填',
        type: 'switch',
        propsKey: 'required',
      },
      {
        title: '只读',
        type: 'switch',
        propsKey: 'readonly',
      },
      {
        title: '显示',
        type: 'switch',
        propsKey: 'visible',
      },
      {
        title: '启用条件',
        type: 'logic',
        propsKey: 'enable',
      },
      {
        title: '必填条件',
        type: 'logic',
        propsKey: 'requiredIf',
      },
      {
        title: '显示条件',
        type: 'logic',
        propsKey: 'visibleIf',
      },
    ],
  },
]

class commonQuestion {
  props: Partial<Question> = commonProps // 属性
  propsConfig: PropsConfigGroup[] = commonPropsConfig // 属性配置

  constructor() {
    this.props = {
      ...this.props,
      ...this.defaultProps,
    }
    this.propsConfig = [...this.propsConfig, ...this.defaultPropsConfig]
  }

  get defaultProps(): Partial<Question> {
    return {}
  }

  get defaultPropsConfig(): PropsConfigGroup[] {
    return []
  }
}

export default commonQuestion
