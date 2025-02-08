<script lang="ts" setup>
import { defineProps } from 'vue'

type Step = {
  id: number
  title: string
}

const props = withDefaults(
  defineProps<{
    stepList: Step[]
    currentStep: number
    height?: string | number
  }>(),
  {
    stepList: () => [
      {
        id: 1,
        title: 'Step 1',
      },
      {
        id: 2,
        title: 'Step 2',
      },
    ],
    currentStep: 1,
    height: '100px',
  },
)

const getClass = () => {
  const stepList = props.stepList
  const className = `grid-cols-${stepList.length}`
  return className
}

const getStepClass = (stepId: number) => {
  return {
    'bg-blue-500': stepId <= props.currentStep,
    'bg-gray-300': stepId > props.currentStep,
  }
}
</script>
<template>
  <div class="grid gap-4 bg-white" :class="getClass()">
    <div
      v-for="(step, index) in stepList"
      :key="step.id"
      class="flex flex-col items-center relative overflow-visible"
      :style="{ height: typeof height === 'number' ? `${height}px` : height }"
    >
      <div
        class="w-full h-full flex items-center justify-center text-white"
        :class="getStepClass(step.id)"
      >
        {{ step.title }}
      </div>
      <!-- 右侧三角形 -->
      <div class="absolute -right-[20px] top-0 h-full" style="z-index: 2">
        <div
          :class="[
            'triangle-right',
            step.id <= currentStep
              ? 'triangle-right-blue'
              : 'triangle-right-gray',
          ]"
        ></div>
      </div>
      <!-- 左侧白色三角形 -->
      <div
        v-if="index > 0"
        class="absolute left-0 top-0 h-full"
        style="z-index: 1"
      >
        <div class="triangle-left"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.triangle-right {
  width: 0;
  height: 100%;
  border-top: calc(50% - 0px) solid transparent;
  border-bottom: calc(50% - 0px) solid transparent;
}

.triangle-right-blue {
  border-left: 20px solid #3b82f6; // blue-500
}

.triangle-right-gray {
  border-left: 20px solid #d1d5db; // gray-300
}

.triangle-left {
  width: 0;
  height: 100%;
  border-top: calc(50% - 0px) solid transparent;
  border-bottom: calc(50% - 0px) solid transparent;
  border-left: 20px solid white;
}
</style>
