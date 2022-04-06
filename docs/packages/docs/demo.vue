<template>
  <div class="component-width">
    <d-strength-meter @change="handleChange" />
  </div>
</template>
<script setup>
function handleChange (value) {
  console.log('handleChange', value)
}
</script>
<style lang="less">
.component-width {
  width: 400px;
}
</style>