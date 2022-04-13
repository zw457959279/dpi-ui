<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 文字提示

Tooltip 文字提示

## 使用场景

常用于展示鼠标 hover 时的提示信息。

## 基础用法
<Preview comp-name="Tooltip" demo-name="demo">
  <demo />
</Preview>

## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`placement` | Tooltip 的出现位置 | string | - | `top/top-start/top-end/bottom/bottom-start`<br/>`bottom-end/left/left-start/left-end`<br/>`right/right-start/right-end` | 否 
`popperClass` | 为 Tooltip 的 popper 添加类名	 | string | - | `default` | 否
`content` | 显示的内容 | string | - | `default` | 是

## 事件
事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`-` | - | - | -
