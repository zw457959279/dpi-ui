<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue';
import demoDisable from './demoDisable.vue';
import demoSubmit from './demoSubmit.vue';
import demoIcon from './demoIcon.vue';
import demoText from './demoText.vue';
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 按钮

默认：这是一个新组件

## 使用场景

请写明组件使用场景

## 基础用法
<Preview comp-name="Button" demo-name="demo">
  <demo />
</Preview>

## 禁用按钮
<Preview comp-name="Button" demo-name="demoDisable">
  <demoDisable />
</Preview>

## 文字按钮
<Preview comp-name="Button" demo-name="demoText">
  <demoText />
</Preview>

## 图标按钮
<Preview comp-name="Button" demo-name="demoIcon">
  <demoIcon />
</Preview>

## 表单提交按钮
<Preview comp-name="Button" demo-name="demoSubmit">
  <demoSubmit />
</Preview>

## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`type` | 类型 | string | `text` | `—` | 否 
`disabled` | 是否为禁用状态 | boolean | — | `false` | 否
`btnType` | 是否为表单提交按钮 | string | `submit` | — | 否
`text` | 按钮内容 | string | — | `按钮` | 否
`icon` | 自定义图标 | string/object | — | — | 否

## Button 插槽
名称 | 说明 
:-: | :-: 
`content` | 按钮内部内容
