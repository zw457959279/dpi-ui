<template>
  <div class="icon_box">
    <div>
      <d-icon class="AddLocation" :size="20" />
      <p>AddLocation</p>
    </div>
  </div>
</template>
<script setup>
import { computed, ref, watch, unref, watchEffect, reactive, onMounted, nextTick, useAttrs, useSlots } from 'vue';
import { ElInput, ElIcon, ElInputNumber } from 'element-plus';
</script>
<style lang="less" scoped>
  .icon_box{
    border-top: 1px solid #dcdfe6;
    border-left: 1px solid #dcdfe6;
    display: flex;
    flex-wrap: wrap;
    & > div{
      width: 114px;
      height: 90px;
      padding-top: 10px;
      box-sizing: border-box;
      border-right: 1px solid #dcdfe6;
      border-bottom: 1px solid #dcdfe6;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    & > div:hover{
      background-color: #f2f6fc;
      color: #0455da;
      ::v-deep(.el-icon){
        color: #0455da!important;
      }
    }
  }
</style>