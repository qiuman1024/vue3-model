<script setup lang="ts">
import { ref, toRaw } from 'vue'
import { useSurey } from '../hooks/useSurey'
import type { Question } from '@/types/survey'
import { cloneDeep } from 'lodash'
const { addQuestion } = useSurey()
import GetSurveyData from '@/utils/data/createSurvey'
import { QuestionType } from '@/types/survey'

const baseList = ref([
  {
    name: '输入框',
    icon: 'Tickets',
    defaultData: GetSurveyData.createQuestion(QuestionType.TEXT_INPUT),
  },
  {
    name: '多行输入框',
    icon: 'Memo',
    defaultData: GetSurveyData.createQuestion(QuestionType.MULTI_INPUT),
  },
  {
    name: '单选组',
    icon: 'Cpu',
    defaultData: GetSurveyData.createQuestion(QuestionType.RADIO_GROUP),
  },
  {
    name: '多选组',
    icon: 'CircleCheck',
    defaultData: GetSurveyData.createQuestion(QuestionType.CHECKBOX_GROUP),
  },
  {
    name: '下拉框',
    icon: 'ArrowDown',
    defaultData: GetSurveyData.createQuestion(QuestionType.DROPDOWN),
  },
])
const addData = (defaultData: Question) => {
  const data = cloneDeep(toRaw(defaultData))
  addQuestion(data)
}
</script>
<template>
  <div>
    <h1 class="pl-2">工具栏</h1>
    <div class="grid grid-cols-3 mt-2">
      <div
        class="flex flex-col items-center box-border py-2 cursor-pointer hover:bg-gray-100"
        v-for="item in baseList"
        :key="item.name"
        @click="addData(item.defaultData)"
      >
        <el-icon class="!text-gray-500">
          <component :is="item.icon" />
        </el-icon>
        <span class="text-xs text-gray-500 mt-1">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>
