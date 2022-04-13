<template>
  <div class="upload_box">
    <d-input v-model="uploadName" />
    <d-upload :on-success="onSuccess" />
  </div>
</template>
<script setup>
import { computed, ref, watch, unref, watchEffect, reactive, onMounted, nextTick, useAttrs } from 'vue';
import { ElUpload, ElInput, ElButton } from 'element-plus';

let uploadName = ref('');
let onSuccess = (response, file) => {
  uploadName.value = file.name;
};
</script>
<style lang="less" scoped>
  .upload_box{
    display: flex;
    .d-input{
      margin-right: 10px;
    }
  }
</style>