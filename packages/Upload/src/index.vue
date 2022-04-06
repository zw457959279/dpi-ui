<template>
  <div class="d-upload">
    <el-input v-model="uploadName" placeholder="请输入内容"></el-input>
    <el-upload
      class="upload-demo"
      :action="action"
      :on-success="handleSuccess"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :limit="1"
      :on-exceed="handleExceed"
      :on-change="handleChange"
      :show-file-list="false"
    >
      <el-button type="primary">选择文件</el-button>
    </el-upload>
  </div>
</template>

<script setup>
import { computed, ref, watch, unref, watchEffect, reactive, onMounted, nextTick, useAttrs } from 'vue';
import { ElUpload, ElInput, ElButton } from 'element-plus';

let uploadName = ref('');
let action = ref('http://siteops.uat2.dpi.net.cn:8088/file/upload');
let fileList = ref([]);
let handleSuccess = (response, files) => {
  console.log('handleSuccess', response, files);
  uploadName.value = files.name;
};
let handleRemove = (item1, item2, item3) => {
  console.log('handleRemove', item1, item2, item3);
};
let beforeRemove = (item1, item2, item3) => {
  console.log('beforeRemove', item1, item2, item3);
};
let handleExceed = (item1, item2, item3) => {
  console.log('handleExceed', item1, item2, item3);
};
let handleChange = (item1, item2, item3) => {
  console.log('handleChange', item1, item2, item3);
};
</script>

<style lang="less" scoped>
.d-upload {
  width: auto;
  display: flex;
  ::v-deep(.el-input){
    width: 320px;
    margin-right: 8px;
    --el-input-border-color: #BCBDBE;
    --el-border-color-base: #BCBDBE;
    --el-input-hover-border-color: #BCBDBE;
    --el-input-focus-border-color: #0455da;
    .el-input__inner{
      height: 2.125rem;
      line-height: 2.125rem;
      border-radius: 0!important;
    }
  }
  ::v-deep(.el-button){
    --el-button-bg-color: #FFF;
    --el-button-text-color: #0E1D38;
    --el-button-border-color: #BCBDBE;
    --el-button-hover-bg-color: #FFF;
    --el-button-hover-border-color: #0455da;
    --el-button-hover-text-color: #0455da;
    height: 2.125rem;
    line-height: 2.125rem;
    border-radius: 0;
  }
  ::v-deep(.el-button:active){
    --el-button-active-bg-color: #FFF;
  }
}
</style>