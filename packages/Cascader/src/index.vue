<template>
  <div class="d-cascader">
    <el-cascader v-model="modelValue" :options="options" :show-all-levels="showAllLevels"  />
  </div>
</template>

<script setup>
import { defineComponent, computed, ref, watch, unref, watchEffect, onMounted } from 'vue';
import { ElCascader } from 'element-plus';

const props = defineProps({
  modelValue: Array,
  options: { type: Array, default: () => [] },
  showAllLevels: { type: Boolean, default: () => { return true; } }
})
let emit = defineEmits(['update:modelValue']);
const modelValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  }
});

</script>

<style lang="less" scoped>
.d-cascader {
  width: 100%;
  ::v-deep(.el-cascader){
    .el-input{
      --el-input-border-color: #BCBDBE;
      --el-border-color-base: #BCBDBE;
      --el-input-hover-border-color: #BCBDBE;
      --el-input-focus-border-color: #0455da;
      .el-input__inner{
        height: 2.125rem;
        line-height: 2.125rem;
        border-radius: 0!important;
      }
    }
  }
}
</style>