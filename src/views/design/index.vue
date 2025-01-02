<script setup lang="ts">
import Toolbar from './componnets/Toolbar.vue'
import Edit from './componnets/Edit.vue'
import Setting from './componnets/Setting.vue'
</script>
<template>
  <div
    class="h-screen w-screen overflow-hidden grid grid-cols-[300px_1fr_300px] gap-x-4 px-3 py-5 bg-gray-100"
  >
    <Toolbar
      class="w-full h-full rounded-xl bg-white shadow-lg box-border py-3"
    />
    <Edit class="w-full h-full rounded-xl bg-white shadow-lg box-border p-3" />
    <Setting
      class="w-full h-full rounded-xl bg-white shadow-lg box-border p-3"
    />
  </div>
</template>
