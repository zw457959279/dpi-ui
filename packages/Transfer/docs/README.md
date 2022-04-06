<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 穿梭框

Transfer 穿梭框

## 使用场景

用于左侧表格穿梭到右侧

## 基础用法
<Preview comp-name="Transfer" demo-name="demo">
  <demo />
</Preview>

## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`v-model:leftData` | 左侧穿梭框数据 | array | - | `[]` | 是 
`v-model:rightData` | 右侧穿梭框数据 | array | - | `[]` | 是
`table-prop` | 穿梭框表格`label`、`prop`、`width` | array | - | `[]` | 是
`select-prop` | 筛选下拉`label`、`value`、`name` | object | - | `{label: 'label', value: 'value', name: '已选基站'}` | 否
`compareId` | 表格数据移动对比id | string | - | `id` | 否


## table-prop属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`label` | 表格label属性 | string | - | `label` | 是 
`prop` | 表格prop属性 | string | - | `prop` | 是 
`width` | 表格列宽度	 | number | - | `auto` | 否 

## select-prop属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`label` | 下拉框label属性 | string | - | `label` | 否 
`value` | 下拉框label属性 | string | - | `value` | 否 
`placeholder` | 占位文字	 | string | - | `请选择` | 否 
`name` | 右侧选中数据标题 | string | - | `已选基站` | 否 

## 事件
事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`—` | — | — | —
