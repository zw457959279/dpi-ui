<template>
  <div class="component-width">
    <d-strength-meter @change="handleChange" />
    <span>禁用输入框</span>
    <d-strength-meter disabled @change="handleChange" />
    <span>不显示输入框，可用于其它UI库或自定义组件</span>
    <d-strength-meter :showInput="false" @change="handleChange" />
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