<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 预警消息

轮播展示当前预警信息

## 使用场景

驾驶舱预警信息展示

## 基础用法

<Preview comp-name="AlarmInfo" demo-name="demo">
  <demo />
</Preview>

## 属性

|   参数    |         说明         |           类型            | 可选值 |  默认值   | 是否必填 |
| :-------: | :------------------: | :-----------------------: | :----: | :-------: | :------: |
|  `infos`  |     传递告警数据     | array<{uniqKey, content}> |   -    |   `--`    |    是    |
| `uniqKey` | 用于避免显示重复预警 |          string           |   -    | `default` |    否    |
