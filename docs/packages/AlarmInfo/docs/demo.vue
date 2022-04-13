<template>
    <d-alarm-info class="chart" :infos="infos" />
</template>

<script setup>
import { ref } from 'vue'
const infos = ref([
  {
    content: '<span style="color:red;">红色预警</span>'
  },
  {
    content: '<span style="color:orange;">橙色预警</span>'
  },
])
</script>

<style lang="less">
.chart {
  width: 500px;
}
</style>