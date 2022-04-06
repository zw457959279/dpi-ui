<template>
  <div class="icon-box">
    <d-button :icon="Search" />
    <d-button :icon="Search" text="测试按钮" />
    <d-button :icon="Search" >
      <template #content>
        <span>按钮</span>
      </template>
    </d-button>
  </div>
</template>
<script setup>
import { Search } from '@element-plus/icons-vue';
</script>
<style lang="less" scoped>
  .icon-box{
    display: flex;
    .d-button{
      margin-right: 20px;
    }
  }
</style>