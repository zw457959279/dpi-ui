<template>
  <div class="d-input">
    <template v-if="type==='number'">
      <el-input-number v-model="modelValue" :max="max" :min="min" :step="step"></el-input-number>
    </template>
    <template v-else>
      <el-input v-model="modelValue" :type="type" :placeholder="placeholder" :disabled="disabled" :suffix-icon="suffixIcon" :prefix-icon="prefixIcon" :clearable="clearable" :show-password="showPassword" @input="inputClick" @clear="clearClick" @blur="blurClick" @change="changeClick" @focus="focusClick" >
        <template #suffix v-if="slots.suffixSlot">
          <slot name="suffixSlot"></slot>
        </template>
        <template #prefix v-if="slots.prefixSlot">
          <slot name="prefixSlot"></slot>
        </template>
        <template #prepend v-if="slots.prependSlot">
          <slot name="prependSlot"></slot>
        </template>
        <template #append v-if="slots.appendSlot">
          <slot name="appendSlot"></slot>
        </template>
      </el-input>
    </template>
  </div>
</template>

<script setup>
import { computed, ref, watch, unref, watchEffect, reactive, onMounted, nextTick, useAttrs, useSlots } from 'vue';
import { ElInput, ElIcon, ElInputNumber } from 'element-plus';
import { Search } from '@element-plus/icons-vue';

const props = defineProps({
  modelValue: [String, Number],
  type: { type: String, default: () => { return 'text'; } },
  maxlength: [String, Number],
  minlength: [Number],
  max: [Number],
  min: [Number],
  step: [Number],
  placeholder: { type: String, default: () => { return '请输入内容'; } },
  disabled: { type: Boolean, default: () => { return false; } },
  clearable: { type: Boolean, default: () => { return false; } },
  showPassword: { type: Boolean, default: () => { return false; } },
  spaceable: { type: Boolean, default: () => { return false; } },
  suffixIcon: [String, Object], // 自定义后缀
  prefixIcon: [String, Object], // 自定义前缀
});
let emit = defineEmits(['update:modelValue', 'input', 'clear', 'blur', 'focus', 'change']);
let slots = useSlots();
const modelValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    if (typeof value === 'string') {
      if (props.spaceable) {
        value = value.replaceAll(' ', '');
      }
    }
    emit("update:modelValue", value);
  }
});
let inputClick = (value) => {
  emit("input", value);
};
let clearClick = () => {
  emit("clear", true);
};
let blurClick = () => {
  emit("blur", true);
};
let changeClick = () => {
  emit("change", true);
};
let focusClick = () => {
  emit("focus", true);
};

</script>

<style lang="less" scoped>
.d-input {
  width: 240px;
  ::v-deep(.el-input){
    --el-input-border-color: #BCBDBE;
    --el-border-color-base: #BCBDBE;
    --el-input-hover-border-color: #BCBDBE;
    --el-input-focus-border-color: #0455da;
    .el-input__inner{
      height: 2.125rem;
      line-height: 2.125rem;
      border-radius: 0!important;
      box-shadow: none;
      border: 1px solid #BCBDBE;
    }
    .el-input__inner:focus{
      border-color: #0455da;
      box-shadow: 0 0 0 1px rgba(4, 85, 218, 0.2)!important;
    }
    .el-input-group__append,.el-input-group__prepend{
      padding: 0 12px;
      border-radius: 0;
      box-shadow: none;
      border: 1px solid #BCBDBE;
    }
    .el-input-group__prepend{
      border-right: none;
    }
    .el-input-group__append{
      border-left: none;
    }
  }
  ::v-deep(.el-input-number){
    border: none;
    .el-input-number__decrease.el-input-number__decrease:hover{
      border: none;
    }
    .el-input{
      .el-input__inner{
        box-shadow: none;
      }
    }
  }
  ::v-deep(.el-textarea){
    --el-input-border-color: #BCBDBE;
    --el-input-hover-border-color: #BCBDBE;
    --el-input-focus-border-color: #0455da;
    .el-textarea__inner{
      border-radius: 0;
      box-shadow: none;
      border: 1px solid #BCBDBE;
    }
    .el-textarea__inner:focus{
      border-color: #0455da;
    }
  }
}
</style>