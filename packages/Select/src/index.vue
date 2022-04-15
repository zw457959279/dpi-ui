<template>
  <div class="d-select">
    <el-select v-model="modelValue" :placeholder="privateProps.placeholder" :disabled="privateProps.disabled" :multiple="privateProps.multiple" :clearable="privateProps.clearable" :collapse-tags="privateProps['collapse-tags']" :filterable="privateProps.filterable" :suffix-icon="CaretTop">
      <el-option
        v-for="item in options"
        :key="item[privateProps.value]"
        :label="item[privateProps.label]"
        :value="item[privateProps.value]">
      </el-option>
    </el-select>
  </div>
</template>

<script setup>
import { computed, ref, watch, unref, watchEffect, reactive, onMounted, nextTick, useAttrs } from 'vue';
import { ElSelect, ElOption, ElTree } from 'element-plus';
import { CaretTop } from '@element-plus/icons-vue';


const attrs = useAttrs();
let privateProps = reactive({
  disabled: false,
  multiple: false,
  clearable: false,
  filterable: false,
  placeholder: '请选择',
  value: 'value',
  label: 'label',
  'collapse-tags': false
});
const props = defineProps({
  modelValue: [String, Array],
  options: {
    type: Array,
    default: () => {
      return [];
    }
  }
});
let emit = defineEmits(['update:modelValue', 'change']);
const modelValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
    emit("change", value);
  }
});
let setSelectProps = (propsTitle) => {
  if (attrs[propsTitle] !== undefined) {
    privateProps[propsTitle] = attrs[propsTitle];
  }
};
onMounted(() => {
  nextTick(() => {
    for (const key in attrs) {
      setSelectProps(key);
    }
    if (privateProps.multiple !== false) {
      modelValue.value = [];
    }
  });
})
</script>
<style lang="less" scoped>
  .d-select{
    width: 240px;
    ::v-deep(.el-select){
      width: 100%;
      height: 2.125rem;
      line-height: 2.125rem;
      .el-input{
        --el-input-focus-border-color: #0455da;
        .el-input__inner{
          height: 2.125rem;
          line-height: 2.125rem;
          border-radius: 0!important;
          box-shadow: none!important;
          border: 1px solid #BCBDBE;
        }
        .el-input__inner:focus{
          border-color: #0455da;
          box-shadow: 0 0 0 1px rgba(4, 85, 218, 0.2)!important;
        }
      }
      .el-input.is-focus{
        .el-input__inner{
          border-color: #0455da;
          box-shadow: 0 0 0 1px rgba(4, 85, 218, 0.2)!important;
        }
      }
      .el-icon{
        color: #374153!important;
      }
      // .el-icon::after{
      //   content: '';
      // }
      // .el-icon::before{
      //   content: '\e78f';
      // }
      .el-select__tags{
        .el-tag--info{
          font-size: 14px;
          color: #18222e;
          background-color: #eff0f1;
          border: none;
          border-radius: 0!important;
          height: 1.5rem;
        }
        .el-tag__close{
          margin-top: 2px;
        }
      }
    }
  }
</style>
<style lang="less">
  .el-select__popper{
    .el-select-dropdown{
      .el-select-dropdown__item{
        height: 1.875rem;
        line-height: 1.875rem;
        margin-bottom: 1px;
        background-color: #FFF;
      }
      .el-select-dropdown__item.hover:not(.selected){
        background-color: #F4F5F9;
      }
      .el-select-dropdown__item.selected{
        background-color: rgba(4, 85, 218, 0.1);
        color: rgba(14, 29, 56, 1);
        font-weight: normal;
      }
    }
    // 多选样式
    .el-select-dropdown.is-multiple{
      .el-select-dropdown__item{
        padding-left: 1.875rem;
        box-sizing: border-box;
      }
      .el-select-dropdown__item.selected {
        background: rgba(4, 85, 218, 0.1) url("./assets/dropdownbox_xuanzhe.png") no-repeat 0.5rem!important;
      }
      .el-select-dropdown__item.selected::after{
        display: none;
      }
    }
  }
</style>