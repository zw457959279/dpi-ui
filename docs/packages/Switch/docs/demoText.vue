<template>
  <div>
    <d-switch v-model="switchFlag1" active-text="是" inactive-text="否" />
    <d-switch v-model="switchFlag2" inline-prompt active-text="是" inactive-text="否" />
  </div>
</template>
<script setup>
import { computed, ref, watch, unref, watchEffect, reactive, onMounted, nextTick, useAttrs } from 'vue';

let switchFlag1 = ref(true);
let switchFlag2 = ref(true);
</script>