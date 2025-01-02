<script setup lang="ts">
import type { Question } from '@/types/survey'
// import { component } from 'vue'
import questionComponents from '../hooks/useComponent'
import { defineModel } from 'vue'

const model = defineModel<Question>({ required: true })

console.log(model.value, questionComponents)
</script>
<template>
  <div class="px-3 mb-3 border-b border-gray-200 box-border py-4">
    <!-- 标题 s -->
    <div
      :class="[
        'text-base text-gray-800 ',
        model.required ? 'required' : '',
        model.readOnly ? 'readonly' : '',
      ]"
    >
      {{ model.title }}
    </div>
    <!-- 标题 e -->

    <!-- 描述 s -->
    <div v-show="model.description" class="text-sm text-gray-500">
      {{ model.description }}
    </div>
    <!-- 描述 e -->

    <component
      class="mt-3"
      :is="questionComponents[model.type]"
      v-model="model"
    />

    <!-- 操作 s -->
    <div class="mt-5 flex flex-row-reverse gap-2">
      <el-button type="primary" size="small">
        <el-icon><CopyDocument /></el-icon>
      </el-button>
      <el-button type="primary" size="small">
        <el-icon><Delete /></el-icon>
      </el-button>
    </div>
    <!-- 操作 e -->
  </div>
</template>

<style scoped>
.required {
  position: relative;
}
.required::before {
  content: '*';
  position: absolute;
  top: 0;
  left: -10px;
  color: red;
}
.readonly {
  position: relative;
}
.readonly::after {
  content: ' ';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
}
</style>
