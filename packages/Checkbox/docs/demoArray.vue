<template>
  <div>
    <d-checkbox v-model="checkValue" :options="options" @change-all="changeAll" @change="changeOne" />
  </div>
</template>
<script setup>
import { computed, ref, watch, unref, watchEffect, reactive, onMounted, nextTick, useAttrs } from 'vue';
let checkValue = ref([]);
let options = ref([
  {
    label: 'tpiii',
    value: '显示'
  },
  {
    label: 'vvv',
    value: '显示bbb',
    disabled: true,
  },
  {
    label: 'gggh'
  },
]);
let changeAll = (item) => {
  console.log('选中所有11', item);
};
let changeOne = (item1, item2) => {
  console.log('选中所有22', item1, item2);
};
</script>