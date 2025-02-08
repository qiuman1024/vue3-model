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
      <el-radio v-if="model.showOtherItem" label="other">{{
        model.otherText
      }}</el-radio>
      <el-radio v-if="model.showNoneItem" label="none">{{
        model.noneText
      }}</el-radio>
    </el-radio-group>
    <div
      v-if="model.showOtherItem && model.value === 'other'"
      class="flex items-center gap-2 mt-2"
    >
      <span class="text-sm text-gray-600 flex-shrink-0">请填写其他值：</span>
      <el-input v-model="model.otherValue"></el-input>
    </div>
  </div>
</template>
