<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 分页

Pagination 分页

## 使用场景

当数据量过多时，使用分页分解数据。

## 基础用法
<Preview comp-name="Pagination" demo-name="demo">
  <demo />
</Preview>

## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`total` | 总条目数 | number | - | `0` | 是 
`page-size` | 每页显示条目个数 | number | - | `10` | 是
`currentPage` | 当前页数 | number | - | `1` | 是
`pageSizes` | 每页显示个数选择器的选项设置 | number[] | - | `[5,10,15,20]` | 否
`layout` | 组件布局，子组件名用逗号分隔 | string | - | `total, sizes, prev, pager, next, jumper` | 否

## 事件
事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`size-change` | `pageSize` 改变时触发 | value | 新每页条数
`current-change` | `current-change` 改变时触发 | value | 新当前页
