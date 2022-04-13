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
        box-shadow: none;
        border: 1px solid #BCBDBE;
      }
      .el-input__inner:focus{
        border-color: #0455da;
        box-shadow: 0 0 0 1px rgb(4 85 218 / 20%);
      }
    }
    .is-focus{
      .el-input__inner{
        border-color: #0455da;
        box-shadow: 0 0 0 1px rgb(4 85 218 / 20%);
      }
    }
  }
}
</style>