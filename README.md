# dpi-ui

## 使用

引入方式

```shell
import DLib from '/dpi-ui/lib/dpi.es'
import '/dpi-ui/lib/index.css'
const app = createApp(App)
app.use(DLib)
```

### 生成新组件模板

根据提示完善信息，生成组件模板

```shell
# 生成组件模板
yarn gen
```

组件结构

```shell
.
├── docs # 组件说明和demo
│   ├── demo.vue # 组件示例
│   └── README.md # 组件说明，可在docs内编写和引入多个demo
├── src # 组件目录
│   └── index.js # 组件源码，在src内进行组件编写
└── index # 入口文件
```

## 运行

使用`yarn dev`命令运行程序进行组件编写

```shell
yarn dev
```

### 构建

构建组件库

```shell
yarn build:lib
```

构建组件说明文档网页

```shell
yarn build:doc
```

