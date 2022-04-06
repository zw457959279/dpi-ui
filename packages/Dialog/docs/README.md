<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 对话框

Dialog 对话框

## 使用场景

在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法
<Preview comp-name="Dialog" demo-name="demo">
  <demo />
</Preview>

## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`v-model:visible` | 是否显示 Dialog | boolean | — | `false` | 是 
`titleName` | 对话框 Dialog 的标题 | string | — | — | 是
`disabled` | 提交按钮状态 | boolean | — | `false` | 是
`customClass` | Dialog 的自定义类名 | string | — | — | 否
`modal` | 是否需要遮罩层 | boolean | — | `true` | 否
`draggable` | 为 Dialog 启用可拖拽功能 | boolean | — | `false` | 否
`close-on-click-modal` | 是否可以通过点击 modal 关闭 Dialog | boolean | — | `true` | 否
`open-delay` | Dialog 打开的延时时间，单位毫秒 | number | — | `0` | 否
`close-delay` | Dialog 关闭的延时时间，单位毫秒 | number | — | `0` | 否

## Dialog 插槽
名称 | 说明 
:-: | :-: 
`content` | dialog中body内容

<!-- ## 事件
事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`click` | 对话框表单提交事件 | — | —
`customEvent` | — | — | — | — -->
