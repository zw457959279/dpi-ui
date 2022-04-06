<template>
  <div>
    <d-radio v-model="checkValue" :options="options" />
  </div>
</template>
<script setup>
import { computed, ref, watch, unref, watchEffect, reactive, onMounted, nextTick, useAttrs } from 'vue';
let checkValue = ref('1');
let options = ref([
  {
    label: '1',
    value: 'options1'
  },
  {
    label: '2',
    value: 'options2'
  },
  {
    label: '3',
    value: 'options3',
    disabled: true
  },
])
// setTimeout(() => {
//   checkValue.check = true;
// }, 8000);
</script>