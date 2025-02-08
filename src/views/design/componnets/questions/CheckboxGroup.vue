<script setup lang="ts">
import type { CheckboxGroupQuestion } from '@/types/survey'
import { defineModel } from 'vue'

const model = defineModel<CheckboxGroupQuestion>({ required: true })
</script>

<template>
  <div>
    <el-checkbox-group v-model="model.value">
      <el-checkbox
        v-for="item in model.choices"
        :key="item.value"
        :label="item.value"
      />
    </el-checkbox-group>
  </div>
</template>
