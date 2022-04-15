<template>
  <div class="dpi_table_box">
    <d-table :data="tableData" :tableColumn="tableColumn"></d-table>
  </div>
</template>
<script setup>
import { computed, ref, watch, unref, watchEffect, reactive, onMounted, nextTick, useAttrs, useSlots } from 'vue';
import { ElTableColumn } from 'element-plus';

let tableData = ref([
  {
    name: '测试',
    des: '这是一个假名',
    votethemeStatus: 1,
  },
  {
    name: '张三',
    des: '测试名称',
    votethemeStatus: 2
  }
]);
let handleLook = (item1, item2) => {
  console.log(item1, item2)
}
let handleEdit = (item1, item2) => {
  console.log(item1, item2)
}
let tableColumn = ref([
  {
    type: 'selection',
    width: '60'
  },
  {
    prop: 'name',
    label: '名称',
    width: '100'
  },
  {
    prop: 'des',
    label: '描述',
  },
  {
    prop: 'votethemeStatus',
    label: '状态',
    formatData: (val) => {
      return val == 1 ? '未开始' : val == 2 ? '进行中' : val == 3 ? '已结束' : ''
    },
    lineType: (val) => {
      return val == 1 ? 'red' : val == 2 ? 'blue' : val == 3 ? 'yellow' : ''
    }
  },
  {
    prop: 'btn',
    label: '操作',
    fixed: 'right',
    width: '200',
    btn: [{
        name: '查看',
        func: handleLook
      },
      {
        name: '编辑',
        func: handleEdit
      }
    ]
  }
]);

</script>
<style lang="less" scoped>
  .dpi_table_box{
    width: 100%;
  }
</style>