<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue';
import demoDisable from './demoDisable.vue';
import demoRange from './demoRange.vue';
import demoClick from './demoClick.vue';
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 日期选择器

默认：这是一个新组件

## 使用场景

请写明组件使用场景

## 基础用法
<Preview comp-name="DataPicker" demo-name="demo">
  <demo />
</Preview>

## 禁止选择的时间
<Preview comp-name="DataPicker" demo-name="demoDisable">
  <demoDisable />
</Preview>

## 选择日期范围
<Preview comp-name="DataPicker" demo-name="demoRange">
  <demoRange />
</Preview>

## 时间快捷按钮
<Preview comp-name="DataPicker" demo-name="demoClick">
  <demoClick />
</Preview>

## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`v-model` | 选中项绑定值	 | string | array | — | — | 是 
`readonly` | 只读 | boolean | — | `false` | 否
`disabled` | 禁用 | boolean | — | `false` | 否
`editable` | 文本框可输入 | boolean | — | `false` | 否
`clearable` | 是否显示清除按钮 | boolean | — | `false` | 否
`unlink-panels` | 在范围选择器里取消两个日期面板之间的联动 | boolean | — | `false` | 否
`placeholder` | 非范围选择时的占位内容 | string | — | `请选择时间` | 否
`start-placeholder` | 范围选择时开始日期的占位内容 | string | — | `开始时间` | 否
`end-placeholder` | 范围选择时结束日期的占位内容 | string | — | `结束时间` | 否
`type` | 显示类型 | string | `date`、`daterange` | `date` | 否
`format` | 显示在输入框中的格式 | string | — | `YYYY-MM-DD` | 否
`value-format` | 显示在输入框中的格式 | string | — | `YYYY-MM-DD` | 否
`range-separator` | 选择范围时的分隔符 | string | — | `~` | 否
`disabled-date` | 一个用来判断该日期是否被禁用的函数 | function | — | — | 否
`shortcuts` | 设置快捷选项，需要传入数组对象 | object[{ text: string, value: date / function }] | — | — | 否

## 事件
事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`change` | 用户确认选定的值时触发 | item | 组件绑定值
`calendar-change` | 如果用户没有选择日期，那默认展示当前日的月份 | [Date, Date] | 实时选中值
`panel-change` | 当日期面板改变时触发 | (date, mode, view) | 面板当前展示的时间
