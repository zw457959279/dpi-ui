<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 上传

默认：这是一个新组件

## 使用场景

请写明组件使用场景

## 基础用法
<Preview comp-name="Upload" demo-name="demo">
  <demo />
</Preview>

## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`action` | 请求 URL | string | — | `http://siteops.uat2.dpi.net.cn:8088/file/upload` | 否 
`on-success` | 文件上传成功时的钩子 | function | `(response, file)` | — | 否
`on-remove` | 文件列表移除文件时的钩子 | function | — | — | 否
`before-remove` | 删除文件之前的钩子 | function | — | — | 否
`limit` | 允许上传文件的最大数量 | number | — | `1` | 否
`on-exceed` | 当超出限制时，执行的钩子函数 | function | — | — | 否
`on-change` | 文件状态改变时的钩子 | function | — | — | 否
`show-file-list` | 是否显示已上传文件列表 | boolean | — | `false` | 否

