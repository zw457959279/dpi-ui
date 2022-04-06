<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue';
import demoDisable from './demoDisable.vue';
import demoClear from './demoClear.vue';
import demoPassword from './demoPassword.vue';
import demoIcon from './demoIcon.vue';
import demoTextarea from './demoTextarea.vue';
import demoNumber from './demoNumber.vue';
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 输入框

Input 输入框

## 使用场景

通过鼠标或键盘输入字符

## 基础用法
<Preview comp-name="Input" demo-name="demo">
  <demo />
</Preview>

## 禁用输入框
<Preview comp-name="Input" demo-name="demoDisable">
  <demoDisable />
</Preview>

## 可清空
<Preview comp-name="Input" demo-name="demoClear">
  <demoClear />
</Preview>

## 数字
<Preview comp-name="Input" demo-name="demoNumber">
  <demoNumber />
</Preview>

## 密码框
<Preview comp-name="Input" demo-name="demoPassword">
  <demoPassword />
</Preview>

## 带icon的输入框
<Preview comp-name="Input" demo-name="demoIcon">
  <demoIcon />
</Preview>

## 文本域
<Preview comp-name="Input" demo-name="demoTextarea">
  <demoTextarea />
</Preview>

## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`v-model` | 绑定值 | string / number	 | — | — | 是 
`type` | 类型 | string | `text`、`textarea` | `text` | 否
`placeholder` | 输入框占位文本 | string | — | `请输入内容` | 否
`disabled` | 是否禁用 | boolean | — | `false` | 否
`clearable` | 是否可清空 | boolean | — | `false` | 否
`spaceable` | 是否可输入空格 | boolean | — | `false` | 否
`maxlength` | 最大输入长度 | string / number | — | — | 否
`minlength` | 最小输入长度 | number | — | — | 否
`max` | 设置最大值 | number | — | — | 否
`min` | 设置最小值 | number | — | — | 否
`step` | 设置输入字段的合法数字间隔 | number | — | `1` | 否
`show-password` | 是否显示切换密码图标 | boolean | — | `false` | 否
`prefix-icon` | 自定义前缀图标 | string / Component | — | — | 否
`suffix-icon` | 自定义后缀图标 | string / Component | — | — | 否

## Input 插槽
名称 | 说明 
:-: | :-: 
`prefixSlot` | 输入框头部内容，只对 type="text" 有效
`suffixSlot` | 输入框尾部内容，只对 type="text" 有效
`prependSlot` | 输入框前置内容，只对 type="text" 有效
`appendSlot` | 输入框后置内容，只对 type="text" 有效

## 事件
事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`input` | 在 Input 值改变时触发 | value | 实时输入值
`blur` | 在 Input 失去焦点时触发 | — | (event: Event)
`focus` | 在 Input 获得焦点时触发 | — | (event: Event)
`change` | 仅在输入框失去焦点或用户按下回车时触发 | — | (value: string | number)
`clear` | 在点击由 `clearable` 属性生成的清空按钮时触发 | — | —
