<template>
  <div class="d-tooltip">
    <el-tooltip :placement="placement" :popper-class="popperClass" effect="dark" :content="content">
      <slot name="content"></slot>
    </el-tooltip>
  </div>
</template>

<script setup>
import { ElTooltip } from 'element-plus';

const props = defineProps({
  placement: {
    type: String,
    default: () => { return 'right'; }
  },
  popperClass: {
    type: String,
    default: () => { return ''; }
  },
  content: {
    type: String,
    default: () => { return ''; }
  }
});
</script>

<style scoped>
.d-tooltip {
  width: 100%;
}
</style>