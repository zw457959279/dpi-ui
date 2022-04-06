<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import demo2 from './demo2.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 数字动画组件

这是一个有数字动画的组件

## 使用场景

请写明组件使用场景

## 基础用法

<Preview comp-name="CountTo" demo-name="demo">
  <demo />
</Preview>

## 后缀使用

<Preview comp-name="CountTo" demo-name="demo">
  <demo2 />
</Preview>

## 属性

|    参数     |     说明     |  类型   | 可选值 |  默认值   | 是否必填 |
| :---------: | :----------: | :-----: | :----: | :-------: | :------: |
| `startVal`  |    起始值    | number  |   -    | `default` |    否    |
|  `endVal`   |    最终值    | number  |   -    | `default` |    否    |
| `duration`  |   持续时间   | number  |   -    | `default` |    否    |
| `autoplay`  | 是否自动触发 | boolean |   -    | `default` |    否    |
| `decimals`  | 小数点后位数 | number  |   -    | `default` |    否    |
|  `prefix`   |     前缀     | string  |   -    |   `''`    |    否    |
|  `suffix`   |     后缀     | string  |   -    |   `''`    |    否    |
| `separator` |    分隔符    | string  |   -    |    `,`    |    否    |
|  `decimal`  |    小数点    | string  |   -    |    `.`    |    否    |
|   `color`   |     颜色     | string  |   -    |    ``     |    否    |
| `useEasing` | 数字动画类型 | string  |   -    | `linear`  |    否    |

## 事件

|    事件名    |       说明       |  参数列表  | 参数说明 |
| :----------: | :--------------: | :--------: | :------: |
| `onStarted`  | 数字动画开始回调 | function() |          |
| `onFinished` | 数字动画结束回调 | function() |          |
