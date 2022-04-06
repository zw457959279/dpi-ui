<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 密码强度输入框组件

验证密码强度

## 使用场景

创建用户新建密码、修改密码时使用

## 基础用法

<Preview comp-name="StrengthMeter" demo-name="demo">
  <demo />
</Preview>

## 属性

|       参数       |      说明      |  类型  | 可选值 | 默认值  | 是否必填 |
| :--------------: | :------------: | :----: | :----: | :-----: | :------: |
| `value(v-model)` |   输入框内容   | string |   -    |  `--`   |    否    |
|    `disabled`    | 输入框是否可用 | string |   -    | `false` |    否    |
|   `showInput`    | 是否显示输入框 | string |   -    | `false` |    否    |

## 事件

|     事件名     |          说明          |    参数列表     | 参数说明 |
| :------------: | :--------------------: | :-------------: | :------: |
|    `change`    | 输入框内容变化时的回调 |   function(e)   | 输入的值 |
| `score-change` |  密码强度变化时的回调  | function(score) | 参数强度 |
