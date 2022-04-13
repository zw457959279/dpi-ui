<template>
  <div class="icon_demo">
    <div>
      <span>图标属性设置:</span>
      <d-input v-model="value1" :suffix-icon="Search" />
      <d-input v-model="value2" :prefix-icon="Search" />
    </div>
    <div>
      <span>图标插槽设置:</span>
      <d-input v-model="value3">
        <template #suffixSlot>
          <el-icon class="el-input__icon"><Search /></el-icon>
        </template>
      </d-input>
      <d-input v-model="value4">
        <template #prefixSlot>
          <el-icon class="el-input__icon"><Search /></el-icon>
        </template>
      </d-input>
    </div>
    <div>
      <span>复合型输入框:</span>
      <d-input v-model="value5">
        <template #prependSlot>
          https
        </template>
      </d-input>
      <d-input v-model="value6">
        <template #appendSlot>
          https
        </template>
      </d-input>
    </div>
  </div>
</template>
<script setup>
import { computed, ref, watch, unref, watchEffect, reactive, onMounted, nextTick, useAttrs } from 'vue';
import { ElInput, ElIcon } from 'element-plus';
import { Search } from '@element-plus/icons-vue';

let value1 = ref('');
let value2 = ref('');
let value3 = ref('');
let value4 = ref('');
let value5 = ref('');
let value6 = ref('');
onMounted(() => {
  
});
</script>
<style lang="less" scoped>
  .icon_demo{
    & > div{
      display: flex;
      margin-bottom: 20px;
      & > .d-input{
        margin-left: 20px;
      }
    }
  }
</style>