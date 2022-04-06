<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue';
import demoArray from './demoArray.vue';
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 单选框

默认：这是一个新组件

## 使用场景

请写明组件使用场景

## 基础用法
<Preview comp-name="Radio" demo-name="demo">
  <demo />
</Preview>

## 单选框组
<Preview comp-name="Radio" demo-name="demoArray">
  <demoArray />
</Preview>

## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`v-model` | 选中项绑定值 | string/number/boolean | — | — | 是 
`label` | 单选框对应的值	 | string/number/boolean | 为单个单选框是为必选| — | 否
`value` | 单选框对应显示内容 | string/number/boolean | 无value值是显示label | — | 否
`disabled` | 是否禁用单选框	 | boolean | — | `false` | 否
`options` | 单选框选择组 | array | 为单选框组是为必填 | — | 否

## options参数配置
参数 | 说明 | 是否必填
:-: | :-: | :-: 
`label` | 选中值 | 是
`disabled` | 是否禁用 | 否
`value` | 单选框显示值，无value值是显示label | 否

## 事件
事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`change` | 绑定值变化时触发的事件	 | label | 选中的radio label值

