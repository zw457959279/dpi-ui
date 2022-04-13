<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue';
import demoAll from './demoAll.vue';
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 图标

默认：这是一个新组件

## 使用场景

请写明组件使用场景

## 基础用法
<Preview comp-name="Icon" demo-name="demo">
  <demo />
</Preview>

## 所有图标图例
<Preview comp-name="Icon" demo-name="demoAll">
  <demoAll />
</Preview>

## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`class` | 图标类型 | string | — | — | 是
`size` | 图标大小 | number | — | `16` | 否 
`color` | 图标颜色 | string | — | `#0E1D38` | 否

## 事件
事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`click` | 点击事件 | $event | 原生的 dom event
`customEvent` | 自定义事件 | [a, b, c] | a：参数一；b：参数二；c：参数三
