<template>
  <div>
    <span @click="dialogVisible=true">打开对话框</span>
    <d-dialog v-model:visible="dialogVisible" :titleName="titleName" @click="submitForm" :disabled="disabled">
      <template #content>
        <el-form :inline="true" :model="formInline" ref="form" class="demo-form-inline">
          <el-form-item label="Approved by">
            <el-input v-model="formInline.user" placeholder="Approved by" />
          </el-form-item>
          <el-form-item label="Activity zone">
            <el-select v-model="formInline.region" placeholder="Activity zone">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
        </el-form>
      </template>
    </d-dialog>
  </div>
</template>
<script setup>
import { ref, onMounted, reactive } from 'vue';
import { ElSelect, ElOption, ElButton, ElForm, ElFormItem, ElInput } from 'element-plus';
let dialogVisible = ref(false);
let disabled = ref(true);
let titleName = ref('标题测试');
let submitForm = () => {
  console.log('确认提交');
  dialogVisible.value = false;
};
const formInline = reactive({
  user: '',
  region: '',
})
</script>
<style lang="less" scoped>
  
</style>