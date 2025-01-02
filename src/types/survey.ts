// 基础实体
export interface BaseEntity {
  title: string // 标题
  description?: string // 描述
}

// 问卷
export interface Survey extends BaseEntity {
  pages: Page[]
}

// 页
export interface Page<T extends Question = Question> extends BaseEntity {
  id: string
  name: string
  questions?: T[]
}

// 问题
export interface Question extends BaseEntity {
  id: string
  required: boolean // 是否必填
  visible: boolean // 是否显示
  readOnly: boolean // 是否只读
  requiredIf?: string // 必填条件
  visibleIf?: string // 显示条件
  enableIf?: string // 启用条件
  type: QuestionType // 问题类型
  value?: string | string[] // 值
}

// 问题类型
export enum QuestionType {
  TEXT_INPUT = 'TextInput', // 单行输入框
  MULTI_INPUT = 'MultiInput', // 多行输入框
  RADIO_GROUP = 'RadioGroup', // 单选组
  CHECKBOX_GROUP = 'CheckboxGroup', // 多选组
  DROPDOWN = 'Dropdown', // 下拉框
}

// 选项
export interface choices {
  label: string // 标签
  value: string // 值
}

// 单行输入框
export interface InputQuestion extends Question {
  type: QuestionType.TEXT_INPUT
  placeholder?: string
}

// 多行输入框
export interface MultiInputQuestion extends Question {
  type: QuestionType.MULTI_INPUT
  placeholder?: string // 输入框提示
}

// 单选组
export interface RadioGroupQuestion extends Question {
  type: QuestionType.RADIO_GROUP
  showNoneItem: boolean // 是否显示空选项
  noneText?: string // 空选项文本
  showOtherItem: boolean // 是否显示其他选项
  otherText?: string // 其他选项文本
  choices: choices[] // 选项
}

// 多选组
export interface CheckboxGroupQuestion extends Question {
  type: QuestionType.CHECKBOX_GROUP
  showNoneItem: boolean // 是否显示空选项
  noneText?: string // 空选项文本
  showOtherItem: boolean // 是否显示其他选项
  otherText?: string // 其他选项文本
  showSelectAllItem: boolean // 是否显示全选选项
  choices: choices[] // 选项
}

// 下拉框
export interface DropdownQuestion extends Question {
  type: QuestionType.DROPDOWN
  showNoneItem: boolean // 是否显示空选项
  noneText?: string // 空选项文本
  showOtherItem: boolean // 是否显示其他选项
  otherText?: string // 其他选项文本
  choices: choices[] // 选项
  placeholder?: string // 输入框提示
}
