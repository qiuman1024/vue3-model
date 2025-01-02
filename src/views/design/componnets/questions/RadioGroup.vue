<script setup lang="ts">
import type { RadioGroupQuestion } from '@/types/survey'
import { defineModel } from 'vue'

const model = defineModel<RadioGroupQuestion>({ required: true })
</script>

<template>
  <div>
    <el-radio-group v-model="model.value">
      <el-radio
        v-for="item in model.choices"
        :key="item.value"
        :label="item.value"
      />
    </el-radio-group>
  </div>
</template>
