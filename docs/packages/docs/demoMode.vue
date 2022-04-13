<template>
  <div class="select_box">
    <d-select v-model="selectValue1" placeholder="测试select" :options="options" multiple />

    <d-select v-model="selectValue2" :options="options" multiple collapse-tags/>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
let selectValue1 = ref([]);
let selectValue2 = ref([]);
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
<style lang="less" scoped>
  .select_box{
    display: flex;
    .d-select{
      margin-right: 20px;
    }
  }
</style>