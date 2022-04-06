<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue';
import demoArray from './demoArray.vue';
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 多选框

默认：这是一个新组件

## 使用场景

请写明组件使用场景

## 基础用法
<Preview comp-name="Checkbox" demo-name="demo">
  <demo />
</Preview>

## 多选框组
<Preview comp-name="Checkbox" demo-name="demoArray">
  <demoArray />
</Preview>

## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`v-model` | 选中项绑定值 | object/array | — | — | 是 
`options` | 多选框选择组 | array | 当`v-model`为array时为必填 | — | 否

## v-model为object参数配置
参数 | 说明 | 是否必填
:-: | :-: | :-: 
`check` | 是否选中 | 是
`label` | 选中值 | 是
`disabled` | 是否禁用 | 否
`value` | 复选框显示值，无此参数是显示label | 否

## options参数配置
参数 | 说明 | 是否必填
:-: | :-: | :-: 
`label` | 选中值 | 是
`disabled` | 是否禁用 | 否
`value` | 复选框显示值，无此参数是显示label | 否

## 事件
事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`click` | 点击事件 | $event | 原生的 dom event
`customEvent` | 自定义事件 | [a, b, c] | a：参数一；b：参数二；c：参数三
