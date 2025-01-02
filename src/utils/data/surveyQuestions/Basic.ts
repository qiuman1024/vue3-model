import type { Question } from '@/types/survey'
import { cloneDeep } from 'lodash'
import { nanoid } from 'nanoid'
const defaultQuestionData: Partial<Question> = {
  id: nanoid(),
  title: '',
  description: '',
  required: false,
  visible: true,
  readOnly: false,
}

export default class baseQuestion {
  props = cloneDeep(defaultQuestionData)
  constructor() {
    Object.assign(this.props, this.defaultProps)
  }
  get defaultProps() {
    return {}
  }
}
