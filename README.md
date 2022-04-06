# 组件库

## 获取代码

```shell
# 克隆代码
git clone -b dev git@172.16.122.68:kf/dpi-web/dpi-ui.git
```

##  npm script

```json
"scripts": {
  # 安装依赖
  "dev": "vite --config ./build/base.config.js",
  # 构建组件使用说明网页
  "build:doc": "vite build --config ./build/doc.config.js",
  # 构建组件库
  "build:lib": "vite build --config ./build/lib.config.js",
  # 生成组件、demo、文档模板
  "gen": "node ./script/genNewComp/index.js"
}
```

## 目录说明

```shell
.
├── build # 打包脚本相关
│   ├── base.config.js # 基础配置文件
│   ├── doc.config.js # 文档配置文件
│   └── lib.config.js # 库配置文件
├── packages # 组件目录
│   ├── _hooks # 复用逻辑
│   ├── _utils # 通用工具
│   └── component # 组件
├── script # 命令与构建相关逻辑
│   └── genNewComp # 生成组件逻辑
└── src # 页面代码
```

## 使用

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

