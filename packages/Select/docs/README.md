<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue';
import demoDisabled from './demoDisabled.vue';
import demoMode from './demoMode.vue';
import demoClear from './demoClear.vue';
import demoFilter from './demoFilter.vue';
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 选择器

默认：这是一个新组件

## 使用场景

请写明组件使用场景

## 基础用法
<Preview comp-name="Select" demo-name="demo">
  <demo />
</Preview>

## 禁用用法
<Preview comp-name="Select" demo-name="demoDisabled">
  <demoDisabled />
</Preview>

## 基础多选
<Preview comp-name="Select" demo-name="demoMode">
  <demoMode />
</Preview>

## 可清空单选
<Preview comp-name="Select" demo-name="demoClear">
  <demoClear />
</Preview>

## 筛选选项
<Preview comp-name="Select" demo-name="demoFilter">
  <demoFilter />
</Preview>

## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`v-model` | 绑定值	 | string array | - | `string` `array` | 是 
`options` | 下拉列表数据 | array | - | `array` | 是
`placeholder` | 占位符 | string | - | `请选择` | 否
`disabled` | 是否禁用 | boolean | - | `false` | 否
`clearable` | 是否可以清空选项 | boolean | - | `false` | 否
`filterable` | 是否可搜索	 | boolean | - | `false` | 否
`multiple` | 是否多选	 | boolean | - | `false` | 否
`collapse-tags` | 多选时是否将选中值按文字的形式展示	 | boolean | - | `false` | 否

## option属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`value` | 选项的值 | string/number | - | `value`| 否 
`label` | 选项的标签 | string/number | - | `label` | 否

## 事件
事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`change` | 选中值发生变化时触发	 | item | 目前的选中值
