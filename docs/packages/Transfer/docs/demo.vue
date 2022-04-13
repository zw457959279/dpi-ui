<template>
  <div>
    <d-transfer v-model:leftData="leftData" v-model:rightData="rightData" :table-prop="tableProp" :select-prop="selectProp" />
  </div>
</template>
<script setup>
import { defineComponent, ref, computed, watchEffect, unref, onMounted, watch, reactive } from 'vue';
import { ElTable, ElTableColumn, ElIcon } from 'element-plus';
const selectProp = reactive({
  label: 'name',
  value: 'id',
  name: '已选基站'
});
let leftData = ref([
  {
    date: '2016-05-03',
    name: 'ddd',
    id: 1
  },
  {
    date: '2016-05-02',
    name: 'ffff',
    id: 2
  },
  {
    date: '2016-05-04',
    name: 'ggg',
    id: 3
  },
  {
    date: '2016-05-01',
    name: 'hhhh',
    id: 4
  }
]);
let rightData = ref([]);
let tableProp = ref([
  {
    label: 'ID',
    prop: 'id',
    width: '80'
  },
  {
    label: 'Date',
    prop: 'date'
  },
  {
    label: 'Name',
    prop: 'name'
  }
]);
let compareId = ref('');
</script>
<style lang="less" scoped>
  .d-transfer{
    width: 1000px;
    height: 500px;
  }
</style>