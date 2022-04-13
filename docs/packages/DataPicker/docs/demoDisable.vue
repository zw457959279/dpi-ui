<template>
  <div>
    <d-data-picker v-model="timeData" :disabled-date="disabledDate" />
  </div>
</template>
<script setup>
import { computed, ref, watch, unref, watchEffect, reactive, onMounted, nextTick, useAttrs } from 'vue';
import { ElSelect, ElOption, ElTree } from 'element-plus';
const disabledDate = (time) => {
  return time.getTime() > Date.now();
}
let timeData = ref('');
// setInterval(() => {
//   console.log('显示数据', timeData.value);
// }, 3000);
</script>
<style lang="less" scoped>
  
</style>