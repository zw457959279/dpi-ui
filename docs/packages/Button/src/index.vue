<template>
  <div class="d-button">
    <el-button :type="type" :disabled="disabled" :btnType="btnType" :icon="icon">
      <template v-if="slots.content">
        <slot name="content"></slot>
      </template>
      <template v-else>
        {{ text }}
      </template>
    </el-button>
  </div>
</template>

<script setup>
import { computed, ref, watch, unref, watchEffect, reactive, onMounted, nextTick, useAttrs, useSlots } from 'vue';
import { ElButton } from 'element-plus';
import { Search } from '@element-plus/icons-vue';
let slots = useSlots();
const props = defineProps({
  type: { type: String, default: () => { return ''; } },
  text: { type: String, default: () => { return '按钮'; } },
  btnType: { type: String, default: () => { return ''; } },
  disabled: { type: Boolean, default: () => { return false; } },
  icon: [String, Object]
})

</script>

<style lang="less" scoped>
.d-button {
  ::v-deep(.el-button){
    --el-color-primary: #0E1D38;
    --el-button-border-color: #BCBDBE;
    --el-button-hover-bg-color: #FFF;
    --el-button-hover-border-color: #0455da;
    --el-button-hover-text-color: #0455da;
    height: 2.125rem;
    line-height: 2.125rem;
    border-radius: 0;
  }
  ::v-deep(.el-button[btnType=submit]){
    --el-button-border-color: #0455da;
    background-color: #0455da;
    color: #FFF;
  }
  ::v-deep(.el-button.is-disabled[btnType=submit]){
    --el-button-disabled-border-color: #82aaec;
    --el-button-border-color: #82aaec;
    background-color: #82aaec;
    color: #FFF;
  }
  ::v-deep(.el-button--text){
    --el-color-primary-light-3: #0455da;
  }
}
</style>