<template>
  <div class="d-transfer">
    <div class="left_transfer">
      <div class="search_box">
        <el-select v-model="modelValue" clearable filterable @change="changeSelect" :placeholder="privateProps['select-prop'].placeholder">
          <el-option
            v-for="item in leftData"
            :key="item[privateProps['select-prop'].value]"
            :label="item[privateProps['select-prop'].label]"
            :value="item[privateProps['select-prop'].value]">
          </el-option>
        </el-select>
      </div>
      <div class="table_box">
        <el-table ref="leftEle" :data="leftData" style="width: 100%" :height="maxHeight" @selection-change="handleSelectionChange($event, 'notSelectedTable')">
          <el-table-column type="selection" width="55" />
          <el-table-column v-for="item in tableProp" :prop="item.prop" :label="item.label" :key="item.label" :width="item.width ? item.width : 'auto'" />
        </el-table>
      </div>
    </div>
    <div class="icon_btn">
      <span ref="toNotSelectEle" @click="toNotSelected">
        <el-icon><ArrowLeft /></el-icon>
      </span>
      <span ref="toSelectEle" @click="toSelected">                    
        <el-icon><ArrowRight /></el-icon>
      </span>
    </div>
    <div class="right_transfer">
      <div class="search_box">
        {{ privateProps['select-prop'].name }}：{{ rightData.length }}
      </div>
      <div class="table_box">
        <el-table ref="rightEle" :data="rightData" style="width: 100%" :height="maxHeight" @selection-change="handleSelectionChange($event, 'selectedTable')">>
          <el-table-column type="selection" width="55" />
          <el-table-column v-for="item in tableProp" :prop="item.prop" :label="item.label" :key="item.label" :width="item.width ? item.width : 'auto'" />
        </el-table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ElIcon, ElTable, ElTableColumn, ElSelect, ElOption } from 'element-plus';
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue';
import { computed, ref, watch, unref, watchEffect, reactive, onMounted, onBeforeMount, nextTick, useAttrs } from 'vue';

const attrs = useAttrs();
let privateProps = reactive({
  'select-prop': {
    label: 'label',
    value: 'value',
    placeholder: '请选择',
    name: '已选基站'
  }
});
let maxHeight = ref(200);
const props = defineProps({
  leftData: {
    type: Array,
    default: () => {
      return [];
    }
  },
  rightData: {
    type: Array,
    default: () => {
      return [];
    }
  },
  compareId: {
    type: String,
    default: () => {
      return 'id';
    }
  },
  tableProp: {
    type: Array,
    default: () => {
      return [];
    }
  }
})
let modelValue = ref('');
let emit = defineEmits(['update:leftData', 'update:rightData']);
let leftEle = ref(null);
let rightEle = ref(null);
let toNotSelectEle = ref(null);
let toSelectEle = ref(null);
let leftData = computed({
  get: () => props.leftData,
  set: (value) => {
    emit("update:leftData", value);
  }
});
let rightData = computed({
  get: () => props.rightData,
  set: (value) => {
    emit("update:rightData", value);
  }
});
let leftSelections = ref([]);
let rightSelections = ref([]);
let handleSelectionChange = (event, tableType) => {
  switch (tableType) {
    case 'notSelectedTable':
      leftSelections.value = event;
      if (event.length > 0) {
        toSelectEle.value.className = 'active';
      } else {
        toSelectEle.value.className = '';
      }
      break;
    case 'selectedTable':
      rightSelections.value = event;
      if (event.length > 0) {
        toNotSelectEle.value.className = 'active';
      } else {
        toNotSelectEle.value.className = '';
      }
      break;
    default:
      break;
  }
};
let toNotSelected = () => {
  if (rightSelections.value.length > 0) {
    let removeSelected = [];
    for (let i = 0; i < rightData.value.length; i++) {
      let hasSelected = rightSelections.value.findIndex((item) => {
        return item[props.compareId] === rightData.value[i][props.compareId];
      });
      if (hasSelected !== -1) {
        removeSelected.push(rightData.value[i]);
        rightData.value.splice(i, 1);
        i--;
      }
    }
    leftData.value.push(...removeSelected);
  }
};
let toSelected = () => {
  if (leftSelections.value.length > 0) {
    modelValue.value = '';
    let addSelected = [];
    for (let i = 0; i < leftData.value.length; i++) {
      let hasSelected = leftSelections.value.findIndex((item) => {
        return item[props.compareId] === leftData.value[i][props.compareId];
      });
      if (hasSelected !== -1) {
        addSelected.push(leftData.value[i]);
        leftData.value.splice(i, 1);
        i--;
      }
    }
    rightData.value.push(...addSelected);
  }
};
let changeSelect = (selectValue) => {
  let findIndex = leftData.value.findIndex((item) => {
    return item[privateProps['select-prop'].value] === selectValue;
  });
  if (findIndex !== -1) {
    let selectList = leftData.value.splice(findIndex, 1);
    leftData.value.unshift(...selectList);
    leftEle.value.setScrollTop(0);
  }
};
let setSelectProps = (propsTitle) => {
  if (attrs[propsTitle] !== undefined) {
    console.log(attrs[propsTitle]);
    privateProps[propsTitle] = attrs[propsTitle];
    console.log(privateProps[propsTitle]);
  }
};
onBeforeMount(() => {
  for (const key in attrs) {
      switch (key) {
        case 'select-prop':
          Object.assign(privateProps['select-prop'], attrs[key]);
          break;
        default:
          setSelectProps(key);
          break;
      }
    }
});
onMounted(() => {
  nextTick(() => {
    maxHeight.value = Array.from(document.querySelectorAll('.left_transfer .table_box'))[0].clientHeight - 15;
    if (privateProps.multiple !== false) {
      modelValue.value = [];
    }
  });
});
</script>

<style lang="less" scoped>
.d-transfer {
  width: 100%;
  display: flex;
  .icon_btn{
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > span{
      display: inline-block;
      width: 26px;
      height: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #DADCE0;
      background-color: #F4F4F4;
      cursor: not-allowed;
      margin: 8px 0;
    }
    & > span.active{
      cursor: pointer;
      background-color: #0455DA;
      border: 1px solid rgba(0, 0, 0, 0.2);
      i{
        color: #FFF;
      }
    }
  }
  .left_transfer,.right_transfer{
    width: calc((100% - 80px) / 2);
    border: 1px solid #E9E9E9;
    box-sizing: border-box;
    .search_box{
      height: 3.5rem;
      line-height: 3.5rem;
      padding: 0 20px 0 20px;
      font-size: 14px;
      border-bottom: 1px solid #E9E9E9;
      box-sizing: border-box;
      ::v-deep(.el-select){
        width: 100%;
        --el-select-border-color-hover: #BCBDBE;
        --el-select-input-focus-border-color: #0455da;
        .el-input{
          --el-input-border-color: #BCBDBE;
          --el-border-color-base: #BCBDBE;
          .el-input__inner{
            height: 2.125rem;
            line-height: 2.125rem;
            border-radius: 0!important;
            box-shadow: none!important;
            border: 1px solid #BCBDBE;
          }
          .el-input__inner:focus{
            border-color: #0455da!important;
            box-shadow: 0 0 0 1px rgb(4 85 218 / 20%)!important;
          }
        }
        .el-input.is-focus{
          .el-input__inner{
            border-color: #0455da;
            box-shadow: 0 0 0 1px rgb(4 85 218 / 20%)!important;
          }
        }
        .el-icon{
          color: #374153!important;
        }
      }
    }
    .table_box{
      padding: 12px 20px 0 20px;
      box-sizing: border-box;
      height: calc(100% - 3.5rem);
    }
  }
  ::v-deep(.el-checkbox){
    .el-checkbox__inner {
      background: #FFFFFF;
      border: 1px solid #BCBDBE;
      border-radius: 0;
      width: 16px;
      height: 16px;
    }
    .el-checkbox__label {
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #0E1D38;
      padding-left: 10px;
      line-height: 18px;
    }
    // 选中后的样式
    .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
      background: #0455da;
      border:none;
      color:#FFFFFF;
    }
    .el-checkbox__input.is-checked+.el-checkbox__label {
      color: #0E1D38;
    }
    // 选中框对勾样式
    .el-checkbox__inner::after {
      border-right-width: 2px;
      border-bottom-width: 2px;
      left: 6px;
      top: 2.5px;
    }
    // 不可选的样式
    .is-disabled{
      .el-checkbox__inner {
        border: none;
        background: #D3D5D8;
        box-sizing: border-box;
      }
    }
    .el-checkbox__input.is-disabled+span.el-checkbox__label {
      color: #A8AFB9;
    }
    .el-checkbox__input.is-indeterminate .el-checkbox__inner::before {
      top: 7px;
    }
  }
  ::v-deep(.el-table){
    .el-table__cell{
      padding: 0;
    }
    thead{
      --el-table-header-bg-color: #F4F4F4!important;
      --el-table-header-text-color: #0E1D38;
      th{
        height: 40px;
        line-height: 40px;
        .cell{
          font-weight: 400;
        }
      }
      th.el-table-fixed-column--right{
        background-color: #F4F4F4!important;
      }
    }
    .cell{
      height: 100%;
      display: flex;
      align-items: center;
    }
    tbody{
      tr{
        td{
          height: 48px;
          line-height: 48px;
          padding: 0;
        }
      }
    }
    .el-table__empty-block{
      height: 48px!important;
      line-height: 48px!important;
    }
  }
}
</style>