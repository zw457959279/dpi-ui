<template>
  <div>
    <d-radio v-model="checkValue" label="1" value="options1" />
    <d-radio v-model="checkValue" label="2" value="options2" />
    <d-radio v-model="checkValue" label="3" value="options3" disabled />
  </div>
</template>
<script setup>
import { computed, ref, watch, unref, watchEffect, reactive, onMounted, nextTick, useAttrs } from 'vue';
let checkValue = ref('1');
// setTimeout(() => {
//   checkValue.check = true;
// }, 8000);
</script>