<template>
  <div>
    <d-switch v-model="switchFlag" />
  </div>
</template>
<script setup>
import { computed, ref, watch, unref, watchEffect, reactive, onMounted, nextTick, useAttrs } from 'vue';

let switchFlag = ref(true);
</script>