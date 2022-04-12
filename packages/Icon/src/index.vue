<template>
  <div class="d-icon">
    <el-icon :size="size" :color="color">
      <Search />
    </el-icon>
  </div>
</template>

<script setup>
import { computed, ref, watch, unref, watchEffect, reactive, onMounted, nextTick, useAttrs, useSlots } from 'vue';
import { ElInput, ElIcon, ElInputNumber } from 'element-plus';
import { Search } from '@element-plus/icons-vue';

const props = defineProps({
  size: { type: Number, default: () => { return 16; } },
  color: { type: String, default: () => { return '#0E1D38'; } },
  class: { type: String, default: () => { return ''; } }
});
setTimeout(() => {
  console.log('样式', props.class);
}, 6000);
</script>

<style lang="less" scoped>
.d-icon {
  width: auto;
}
</style>