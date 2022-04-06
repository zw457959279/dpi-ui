<template>
  <div class="d-data-picker">
    <el-date-picker v-model="modelValue" :type="type" :placeholder="placeholder" :start-placeholder="startPlaceholder" :end-placeholder="endPlaceholder" :editable="editable" :clearable="clearable" :disabled="disabled" :readonly="readonly" :range-separator="rangeSeparator" :format="format" :value-format="valueFormat" :unlinkPanels="unlinkPanels" :shortcuts="shortcuts" :disabled-date="disabledDate" @change="getTime" @calendar-change="calendarChange" @panel-change="panelChange" />
  </div>
</template>

<script setup>
import { computed, ref, watch, unref, watchEffect, reactive, onMounted, nextTick, useAttrs } from 'vue';
import { ElDatePicker } from 'element-plus';

const props = defineProps({
  modelValue: [String, Array],
  disabledDate: Function,
  type: { type: String, default: (value) => { return 'date'; } },
  editable: { type: Boolean, default: (value) => { return false; } },
  disabled: { type: Boolean, default: (value) => { return false; } },
  readonly: { type: Boolean, default: (value) => { return false; } },
  clearable: { type: Boolean, default: (value) => { return true; } },
  placeholder: { type: String, default: () => { return '请选择时间'; } },
  format: { type: String, default: () => { return 'YYYY-MM-DD'; } },
  valueFormat: { type: String, default: () => { return 'YYYY-MM-DD'; } },
  unlinkPanels: { type: Boolean, default: () => { return false; } },
  rangeSeparator: { type: String, default: () => { return '~'; } },
  shortcuts: { type: Array, default: () => { return []; } },
  startPlaceholder: { type: String, default: () => { return '开始时间'; } },
  endPlaceholder: { type: String, default: () => { return '结束时间'; } }
});
let emit = defineEmits(['update:modelValue', 'change', 'calendar-change', 'panel-change']);
const modelValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  }
});
let calendarChange = (item) => {
  emit("calendar-change", item);
}
let panelChange = (item) => {
  emit("panel-change", item);
}
let getTime = (item) => {
  emit("change", item);
}
</script>

<style lang="less" scoped>
.d-data-picker {
  width: 100%;
  ::v-deep(.el-date-editor){
    --el-input-border-color: #BCBDBE;
    --el-input-hover-border-color: #BCBDBE;
    --el-input-focus-border-color: #0455da;
    border-radius: 0;
    .el-input__inner{
      height: 2.125rem;
      line-height: 2.125rem;
      border-radius: 0;
    }
  }
}
</style>
<style lang="less">
  .el-picker__popper{
    .el-date-range-picker{
      // #d5e2f8
      .in-range{
        div{
          padding-top: 0;
          padding-bottom: 0;
          height: 30px;
          line-height: 30px;
          span{
            height: 30px;
            line-height: 30px;
            background-color: #d5e2f8;
            border-radius: 0;
            width: 100%;
          }
        }
      }
      .in-range.start-date,.in-range.end-date{
        div{
          padding-top: 0;
          padding-bottom: 0;
          height: 30px;
          line-height: 30px;
          span{
            height: 30px;
            line-height: 30px;
            background-color: #0455da;
            border-radius: 0;
            width: 100%;
          }
        }
      }
    }
    .available.current{
      --el-datepicker-active-color: #0455da;
      div{
        padding-top: 0;
        padding-bottom: 0;
        height: 30px;
        line-height: 30px;
        span{
          height: 30px;
          line-height: 30px;
          background-color: #0455da;
          border-radius: 0;
          width: 100%;
        }
      }
    }
  }
</style>