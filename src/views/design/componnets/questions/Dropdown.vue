<script setup lang="ts">
import type { DropdownQuestion } from '@/types/survey'
import { defineModel } from 'vue'

const model = defineModel<DropdownQuestion>({ required: true })
</script>

<template>
  <div>
    <el-select v-model="model.value" :placeholder="model.placeholder">
      <el-option
        v-for="item in model.choices"
        :key="item.value"
        :label="item.value"
        :value="item.value"
      />
    </el-select>
  </div>
</template>
