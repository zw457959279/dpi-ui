<template>
  <div class="d-table">
    <el-table :data="data" :border="border" style="width: 100%">
      <el-table-column v-for="(item,index) in tableColumn" :key="index" :prop="item.prop" :align="align"
			:label="item.label" :min-width="item.minHeight" :type="item.type" :width="item.width" :fixed="item.fixed ?? null">
      <template #default="scope" v-if="!item.type">
        <div v-if="item.btn"> 
					<el-button v-for="(k,index) in item.btn" :key="index" type="text" @click="k.func(scope.$index, scope.row)">{{k.name}}</el-button>
				</div>
        <div v-else>
          <span v-if="!item.formatData">
						<span>{{ scope.row[item.prop] }}</span>
					</span>
					<span v-else>
						<span :style="{ color: item.lineType(scope.row[item.prop]) ?? '#0E1D38' }">{{ item.formatData(scope.row[item.prop]) }}</span>
					</span>
        </div>
      </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { computed, ref, watch, unref, watchEffect, reactive, onMounted, nextTick, useAttrs, useSlots } from 'vue';
import { ElTable, ElTableColumn, ElButton, ElLink } from 'element-plus';
import { Search } from '@element-plus/icons-vue';
const props = defineProps({
  data: [Array],
  tableColumn: [Array],
  border: { type: Boolean, default: () => { return false; } },
  align: { type: String, default: () => { return 'left'; } },
});
</script>

<style lang="less" scoped>
.d-table {
  width: 100%;
  ::v-deep(.el-table){
    tr{
      th{
        padding: 0!important;
        height: 40px;
        line-height: 40px;
        background-color: #F4F5F9!important;
        color: #0E1D38;
        .cell{
          height: 40px;
          line-height: 40px;
          .el-checkbox{
            padding-top: 12px;
          }
        }
      }
    }
    .cell{
      padding: 0 10px;
      box-sizing: border-box;
    }
    .el_table_empty-block{
      height: 48px!important;
      line-height: 48px!important;
    }
    .el-table__body{
      tr{
        td{
          padding: 0;
          height: 48px;
          line-height: 48px;
          box-sizing: border-box;
          .cell{
            height: 48px;
            line-height: 48px;
            .el-checkbox{
              padding-top: 16px;
            }
          }
        }
      }
    }
    .el-button--text{
      color: #0455da;
    }
  }
}
</style>