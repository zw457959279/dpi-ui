<template>
  <div>
    <d-checkbox v-model="checkValue" />
  </div>
</template>
<script setup>
import { computed, ref, watch, unref, watchEffect, reactive, onMounted, nextTick, useAttrs } from 'vue';
let checkValue = reactive({
  check: false,
  label: 'tpiii',
  disabled: false,
  value: '显示'
});

</script>