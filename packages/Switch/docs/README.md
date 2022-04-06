<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue';
import demoText from './demoText.vue';
import demoLoading from './demoLoading.vue';
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 开关

默认：这是一个新组件

## 使用场景

请写明组件使用场景

## 基础用法
<Preview comp-name="Switch" demo-name="demo">
  <demo />
</Preview>

## 文字描述
<Preview comp-name="Switch" demo-name="demoText">
  <demoText />
</Preview>

## 加载状态
<Preview comp-name="Switch" demo-name="demoLoading">
  <demoLoading />
</Preview>

## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`v-model` | 绑定值 | boolean  | — | `false` | 是 
`disabled` | 是否禁用	 | boolean | — | `false` | 否
`inline-prompt` | 文字是否显示在点内 | boolean | — | `false` | 否
`loading` | 是否显示加载中 | boolean | — | `false` | 否
`width` | switch的宽度 | number | — | `36` | 否
`active-color` | switch的值为on时的颜色 | string | — | `#0455DA` | 否
`inactive-color` | switch的值为off时的颜色 | string | — | `#dcdfe6` | 否
`active-text` | switch打开时的文字描述 | string | — | — | 否
`inactive-text` | switch的状态为off时的文字描述 | string | — | — | 否

## 事件
事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`change` | switch状态发生变化时的回调函数 | val | 新状态的值
