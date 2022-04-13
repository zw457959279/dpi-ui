<template>
  <div class="d-upload">
    <el-upload
      class="upload-demo"
      :action="action"
      :on-success="onSuccess"
      :on-remove="onRemove"
      :before-remove="beforeRemove"
      :limit="limit"
      :on-exceed="onExceed"
      :on-change="onChange"
      :show-file-list="showFileList"
    >
      <el-button type="primary">选择文件</el-button>
    </el-upload>
  </div>
</template>

<script setup>
import { computed, ref, watch, unref, watchEffect, reactive, onMounted, nextTick, useAttrs } from 'vue';
import { ElUpload, ElInput, ElButton } from 'element-plus';

const props = defineProps({
  modelValue: [String, Number],
  action: { type: String, default: 'http://siteops.uat2.dpi.net.cn:8088/file/upload'},
  limit: { type: Number, default: 1},
  showFileList: { type: Boolean, default: false},
  onSuccess: Function,
  onRemove: Function,
  beforeRemove: Function,
  onExceed: Function,
  onChange: Function,
})
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
      box-shadow: none;
      border: 1px solid #BCBDBE;
    }
    .el-input__inner:focus{
      border-color: #0455da;
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