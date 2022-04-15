<template>
  <div class="d-pagination">
    <el-pagination
      :currentPage="currentPage"
      :page-size="pageSize"
      :page-sizes="pageSizes"
      :layout="layout"
      :total="total"
      @size-change="onSizeChange"
      @current-change="onCurrentChange" >
    </el-pagination>
  </div>
</template>

<script setup>
import { computed, ref, useSlots } from 'vue';
import { ElPagination} from 'element-plus';

const props = defineProps({
  total: {
    type: Number,
    default: () => {
      return 100;
    }
  },
  layout: {
    type: String,
    default: () => {
      return 'total, sizes, prev, pager, next, jumper';
    }
  },
  pageSize: {
    type: Number,
    default: () => {
      return 5;
    }
  },
  currentPage: {
    type: Number,
    default: () => {
      return 1;
    }
  },
  pageSizes: {
    type: Array,
    default: () => {
      return [5, 10, 15, 20];
    }
  }
});
let emit = defineEmits(['size-change', 'current-change']);
let onSizeChange = (val) => {
  emit('size-change', val);
};
let onCurrentChange = (val) => {
  emit('current-change', val);
};
</script>

<style lang="less" scoped>
@menuSelectColor: #0455da; // 菜单选择蓝色
@labelColor: #0E1D38; // 字体颜色
.d-pagination {
  width: 100%;
  ::v-deep(.el-pagination){
    padding: 0 5px 0 5px;
    height: 28px;
    .el-pagination__jump{
      .el-input{
        --el-input-border-color: #BCBDBE;
        --el-border-color-base: #BCBDBE;
        --el-input-hover-border-color: #BCBDBE;
        --el-input-focus-border-color: #0455da;
        .el-input__inner{
          height: 28px;
          line-height: 28px;
          border-radius: 0!important;
          box-shadow: none;
          border: 1px solid #BCBDBE;
          padding-left: 0px!important;
        }
        .el-input__inner:focus{
          border-color: #0455da;
          box-shadow: 0 0 0 1px rgba(4, 85, 218, 0.2)!important;
        }
      }
    }
    .el-pagination__sizes{
      .el-select{
        --el-select-border-color-hover: #BCBDBE;
        --el-select-input-focus-border-color: #0455da;
        box-shadow: none;
        border: none;
        .el-input{
          border: none;
          box-shadow: none;
          .el-input__inner{
            height: 28px;
            line-height: 28px;
            border-radius: 0!important;
            box-shadow: none!important;
            border: 1px solid #BCBDBE;
          }
          .el-input__inner:focus{
            border-color: #0455da;
            box-shadow: 0 0 0 1px rgba(4, 85, 218, 0.2)!important;
          }
        }
      }
      .el-select .el-input.is-focus .el-input__inner{
        border-color: #0455da!important;
        box-shadow: 0 0 0 1px rgba(4, 85, 218, 0.2)!important;
      }
      .el-input__suffix{
        .el-icon{
          caret-color: rgba(255,255,255,0);
          & > svg{
            display: none;
          }
        }
        .el-select__icon{
          background: url('./assets/top.png') center no-repeat;
          background-size: 8px 4px;
        }
      }
    }
    .el-pager{
      .number{
        color: @labelColor;
        font-weight: 500;
      }
      .active.number{
        color: @menuSelectColor;
      }
      .is-active.number{
        color: @menuSelectColor;
      }
      .number:hover{
        color: @menuSelectColor;
      }
    }
    .el-pagination__editor{
      display: flex;
      align-items: center;
    }
  }
}
</style>