<template>
    <d-en-chart class="chart" :data="data" />
</template>

<script setup>
const data = [[1, 1], [4, -6], [-2, -3], [5, 4]]
</script>

<style lang="less">
.chart {
  width: 500px;
}
</style>