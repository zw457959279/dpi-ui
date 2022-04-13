<template>
  <div class="d-radio">
    <template v-if="options.length !== 0">
      <el-radio-group v-model="modelValue" @change="changeItem">
        <el-radio v-for="item in options" :label="item.label" :key="item.label" :disabled="item.disabled">
          <template v-if="item.value">
            {{ item.value }}
          </template>
          <template v-else>
            {{ item.label }}
          </template>
        </el-radio>
      </el-radio-group>
    </template>
    <template v-else>
      <el-radio v-model="modelValue" :label="label" :value="value" :disabled="disabled" @change="changeItem" >
        <template v-if="value">
          {{ value }}
        </template>
        <template v-else>
          {{ label }}
        </template>
      </el-radio>
    </template>
  </div>
</template>

<script setup>
import { computed, ref, watch, unref, watchEffect, reactive, onMounted, nextTick, useAttrs } from 'vue';
import { ElRadio, ElRadioGroup } from 'element-plus';

const props = defineProps({
  modelValue: [String, Number, Boolean],
  label: [String, Number, Boolean],
  value: [String, Number, Boolean],
  options: { type: Array, default: () => [] },
  disabled: { type: Boolean, default: () => false }
});
let emit = defineEmits(['update:modelValue', 'change']);
const modelValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  }
});

let changeItem = (label) => {
  emit('change', label);
};

</script>

<style lang="less" scoped>
.d-radio {
  width: auto;
  ::v-deep(.el-radio){
    --el-radio-input-width: 16px;
    --el-radio-input-height: 16px;
    --el-color-primary: #0E1D38;
    --el-radio-text-color: #0E1D38;
    --el-radio-input-border-color-hover: #BCBDBE;
    .el-radio__input{
      .el-radio__inner{
        border-color: #BCBDBE;
        background-color: #FFF;
      }
    }
    .el-radio__input.is-checked{
      .el-radio__inner{
        border-color: #0455DA;
        background-color: #FFF;
      }
      .el-radio__inner::after{
        width: 10px;
        height: 10px;
        background-color: #0455DA;
        transition: none;
      }
    }
    .el-radio__input.is-disabled{
      .el-radio__inner{
        border-color: #D3D5D8;
        background-color: #FFF;
      }
      .el-radio__inner::after{
        width: 10px;
        height: 10px;
        background-color: #D3D5D8;
        transform: translate(-50%,-50%) scale(1);
        transition: none;
      }
    }
  }
  ::v-deep(.el-radio.is-disabled){
    .el-radio__label{
      color: #9FA5AF;
    }
  }
}
</style>