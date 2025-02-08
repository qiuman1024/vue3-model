<script setup lang="ts">
import type { Question } from '@/types/survey'
// import { component } from 'vue'
import questionComponents from '../hooks/useComponent'
import { defineModel, defineProps } from 'vue'
import { useSurey } from '../hooks/useSurey'
const { removeQuestion } = useSurey()

const model = defineModel<Question>({ required: true })
const props = defineProps({
  pageIndex: {
    type: Number,
  },
})

console.log(model.value, questionComponents)
</script>
<template>
  <div
    class="px-3 mb-3 border border-blue-400 box-border py-4 cursor-pointer hover:shadow-md"
    :class="{ isHidden: !model.visible }"
  >
    <!-- 标题 s -->
    <div class="text-base text-gray-800" :class="{ required: model.required }">
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
      :class="{ readonly: model.readonly || !model.visible }"
      v-model="model"
    />

    <!-- 备注 s -->
    <div v-show="model.remark" class="text-sm text-gray-500 mt-2">
      {{ model.remark }}
    </div>
    <!-- 备注 e -->

    <!-- 操作 s -->
    <div class="mt-5 flex flex-row-reverse gap-2">
      <el-button type="primary" size="small">
        <el-icon><CopyDocument /></el-icon>
      </el-button>
      <el-button
        @click="removeQuestion(pageIndex ?? 0, model.id)"
        type="primary"
        size="small"
      >
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
  pointer-events: none;
}
.readonly::after {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  z-index: 100;
  opacity: 0.1;
}

.isHidden {
  position: relative;
  opacity: 0.5;
}
</style>
