<template>
  <div>
    <d-input v-model="value" />
  </div>
</template>
<script setup>
import { computed, ref, watch, unref, watchEffect, reactive, onMounted, nextTick, useAttrs } from 'vue';

let value = ref('');

onMounted(() => {
});
</script>
<style lang="less" scoped>
  
</style>