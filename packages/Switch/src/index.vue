<template>
  <div class="d-switch">
    <el-switch v-model="modelValue" :disabled="disabled" :loading="loading" :inline-prompt="inlinePrompt" :width="width" :active-color="activeColor" :inactive-color="inactiveColor" :active-text="activeText" :inactive-text="inactiveText" @change="changeItem" />
  </div>
</template>

<script setup>
import { computed, ref, watch, unref, watchEffect, reactive, onMounted, nextTick, useAttrs } from 'vue';
import { ElSwitch } from 'element-plus';

const props = defineProps({
  modelValue: { type: Boolean, default: () => { return false} },
  disabled: { type: Boolean, default: () => false },
  inlinePrompt: { type: Boolean, default: () => false },
  loading: { type: Boolean, default: () => false },
  width: { type: Number, default: () => 36 },
  activeColor: { type: String, default: () => '#0455DA' },
  inactiveColor: { type: String, default: () => '#dcdfe6' },
  activeText: { type: String, default: () => '' },
  inactiveText: { type: String, default: () => '' }
});
let emit = defineEmits(['update:modelValue', 'change']);
const modelValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  }
});
let changeItem = (value) => {
  emit("change", value);
}
</script>

<style lang="less" scoped>
.d-switch {
  width: auto;
  ::v-deep(.el-switch) {
    --el-switch-button-size: 14px;
    height: 20px;
    .el-switch__core{
      .el-switch__action{
        top: 2px;
        .el-icon.is-loading{
          color: #0455DA;
        }
      }
    }
  }
}
</style>