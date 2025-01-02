<script setup lang="ts">
import type { InputQuestion } from '@/types/survey'
import { defineModel } from 'vue'

const model = defineModel<InputQuestion>({ required: true })
</script>

<template>
  <div>
    <el-input v-model="model.value" :placeholder="model.placeholder" />
  </div>
</template>
