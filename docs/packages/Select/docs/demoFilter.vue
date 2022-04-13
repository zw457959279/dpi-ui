<template>
  <div>
    <d-select v-model="selectValue" :options="options" filterable />
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
let selectValue = ref('222');
let options = ref([
  {
    value: '111',
    label: '测试11',
    aaa: 'mmm11'
  },
  {
    value: '222',
    label: '测试22',
    aaa: 'mmm22'
  },
  {
    value: '333',
    label: '测试33',
    aaa: 'mmm33'
  }
]);
</script>