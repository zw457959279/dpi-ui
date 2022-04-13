<template>
  <div class="d-dialog private_dialog">
    <el-dialog v-model="visible" center :title="titleName" :modal="modal" :custom-class="customClass" :close-on-click-modal="closeOnClickModal" :draggable="draggable" :open-delay="openDelay" :close-delay="closeDelay">
      <template #title>
        <span>{{ titleName }}</span>
        <span class="header_close" @click="closeDialog">
          <img src="./assets/icon_close_small.png" alt="关闭">
        </span>
      </template>
      <div class="dialog_content">
        <slot name="content"></slot>
      </div>
      <template #footer>
        <el-button @click="closeDialog" class="button_info">取消</el-button>
        <el-button @click="submitForm" :disabled="disabled" class="button_primary">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ElDialog, ElButton } from 'element-plus';
import { computed, ref, useSlots, onMounted, nextTick, watch } from 'vue';

const slotsaa = useSlots();
const props = defineProps({
  visible: { type: Boolean, default: () => { return false; } },
  disabled: { type: Boolean, default: () => { return true; } },
  titleName: { type: String, default: () => { return ''; } },
  customClass: { type: String, default: () => { return ''; } },
  openDelay: { type: Number, default: () => { return 0; } },
  closeDelay: { type: Number, default: () => { return 0; } },
  modal: { type: Boolean, default: () => { return true; } },
  closeOnClickModal: { type: Boolean, default: () => { return true; } },
  draggable: { type: Boolean, default: () => { return false; } },
});
let emit = defineEmits(['update:visible', 'click']);
const visible = computed({
  get: () => props.visible,
  set: (value) => {
    emit("update:visible", value);
  }
});
watch(visible, (newItem, oldItem) => {
  if (newItem) {
    nextTick(() => {
      let elBox = Array.from(document.querySelectorAll('.private_dialog .el-dialog'))[0];
      elBox.style.top = `calc(50% - ${elBox.clientHeight / 2 + 'px'})`;
    });
  }
});
/** 关闭对话框 */
let closeDialog = () => {
  visible.value = false;
};
let submitForm = () => {
  emit('click', true);
};
onMounted(() => {
  
});
</script>

<style lang="less" scoped>
.private_dialog {
  width: 100%;
  ::v-deep(.el-dialog){
    font-weight: 400;
    font-size: 14px;
    color: #18222E;
    position: absolute;
    margin: 0!important;
    top: 50%;
    left: calc(50% - 320px);
    width: 640px;
    background-color: #fff;
    // transform: translate(-50%,-50%);
    // transform: translateY(-50%);
    border-radius: 0;
    .el-dialog__header{
      padding: 0 16px;
      height: 3.125rem;
      border-bottom: 1px solid #DADCE0;
      margin: 0;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > span{
        font-size: 16px;
      }
      .header_close{
        img{
          cursor: pointer;
        }
      }
    }
    .el-dialog__footer{
      height: 3.5rem;
      text-align: center;
      border-top: 1px solid #DADCE0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        height:2.125rem;
        border-radius: 0;
        padding:0 1.5625rem;
        border: 1px solid #BCBDBE;
        color: #0E1D38;
        background: rgba(242, 242, 242, 0.8);
      }
      .standard:hover{
        background: rgba(242, 242, 242, 0.8);
        color: #0455DA;
        border-color: #0455DA;
      }
      & > .el-button:nth-of-type(1):hover{
        border-color: #0455DA;
        color: #0455DA;
      }
      .el-button:nth-of-type(2){
        background-color: #0455DA;
        color: #FFF;
      }
      .is-disabled{
        background-color: #82aaec!important;
        border-color: #82aaec!important;
        color: hsla(0,0%,100%,.5)!important;
      }
    }
    .el-dialog__headerbtn{
      display: none;
    }
    .el-input{
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
  }
}
</style>