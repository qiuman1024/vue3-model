<script setup lang="ts">
import type { MultiInputQuestion } from '@/types/survey'
import { defineModel } from 'vue'

const model = defineModel<MultiInputQuestion>({ required: true })
</script>

<template>
  <div>
    <el-input
      v-model="model.value"
      :placeholder="model.placeholder"
      type="textarea"
    />
  </div>
</template>
