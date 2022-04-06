<template>
  <div>
    <d-data-picker v-model="timeData" type="daterange" :shortcuts="shortcuts" />
  </div>
</template>
<script setup>
import { computed, ref, watch, unref, watchEffect, reactive, onMounted, nextTick, useAttrs } from 'vue';
import { ElSelect, ElOption, ElTree } from 'element-plus';

let timeData = ref([]);
const shortcuts = [
  {
    text: 'Last week',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: 'Last month',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: 'Last 3 months',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  },
]
// setInterval(() => {
//   console.log('显示数据', timeData.value);
// }, 3000);
</script>
<style lang="less" scoped>
  
</style>