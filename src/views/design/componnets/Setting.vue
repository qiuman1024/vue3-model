<script setup lang="ts">
import { useSurey } from '../hooks/useSurey'
import { ref } from 'vue'
import type { Question } from '@/types/survey'
const { surveyData, currentQuestion } = useSurey()
</script>
<template>
  <div>
    <template v-if="currentQuestion">
      <div
        class="flex flex-col gap-4 mb-4"
        v-for="item in currentQuestion.propsConfig"
        :key="item.name"
      >
        <h1>{{ item.name }}</h1>
        <div v-for="child in item.children" :key="child.propsKey">
          <div class="grid grid-cols-[70px_1fr] items-center">
            <span class="text-sm text-gray-500">{{ child.title }}</span>
            <!-- 输入框类型 -->
            <el-input
              clearable
              v-if="child.type === 'input'"
              v-model="currentQuestion.props[child.propsKey]"
              :placeholder="'请填写' + child.title"
            />
            <!-- 文本域输入框类型 -->
            <el-input
              clearable
              v-if="child.type === 'textarea'"
              type="textarea"
              v-model="currentQuestion.props[child.propsKey]"
              :placeholder="'请填写' + child.title"
            />
            <!-- 下拉选择类型 -->
            <el-select
              v-if="child.type === 'select' && child.optionsKey"
              v-model="currentQuestion.props[child.propsKey]"
              size="large"
              clearable
              :placeholder="'请填写' + child.title"
            >
              <el-option
                v-for="item in currentQuestion.props[child.optionsKey]"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <!-- 开关类型 -->
            <el-switch
              v-if="child.type === 'switch'"
              v-model="currentQuestion.props[child.propsKey]"
            ></el-switch>
            <!-- 逻辑类型 -->
            <el-button v-if="child.type === 'logic'" type="primary"
              >设置{{ child.title }}</el-button
            >
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
