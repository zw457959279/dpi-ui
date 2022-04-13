<template>
  <div class="number_demo">
    <d-input v-model="value" type="number" />
  </div>
</template>
<script setup>
import { computed, ref, watch, unref, watchEffect, reactive, onMounted, nextTick, useAttrs } from 'vue';

let value = ref(null);

onMounted(() => {
  
});
</script>
<style lang="less" scoped>
  .number_demo{
    width: 100%;
  }
</style>