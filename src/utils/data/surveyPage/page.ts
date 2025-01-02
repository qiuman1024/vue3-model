import type { Page } from '@/types/survey'
import { nanoid } from 'nanoid'

export default class page {
  constructor() {}
  get defaultProps(): Page {
    return {
      id: nanoid(),
      name: '',
      title: '',
      description: '',
      questions: [],
    }
  }
}
