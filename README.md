# react-project-template

React 项目模板

## Features

## flux

内置 Redux 支持，并添加了类型支持和使用范例。

## build

1. 使用 babel 来编译 ts 代码，用 babel 编译 ts 的缺点是无法利用 tsc 的类型检查，所以在 scripts 中的 test 使用`tsc --noEmit`来做类型检查。

2. 使用[babel-preset-react-app](https://www.npmjs.com/package/babel-preset-react-app)作为 babel 预设。

3. 脚本使用 cross-env 来配置编译环境
4. 使用 terser-webpack-plugin 压缩 js 输出代码

## styles

1. 使用 css-loader 加载 css 样式
2. 使用 post-css 和 autoprefixer 来适配浏览器
3. 使用 mini-css-extract-plugin 将样式打包成独立的 css 文件，并 link 到 html 文件中
4. 内置 tailwindcss 支持，虽然支持 css 样式文件，但依然强烈推荐只使用 tailwindcss 来写样式

## lint

1. 使用 @shm-open/eslint-config-bundle 配置 eslint 和 prettier

## develop

1. 使用 `dotenv-webpack` 加载 env-file 来支持环境变量读取，使用参考[src/config.ts](./src/config.ts)
2. dev 模式下使用 `webpack-dev-server` 来启动本地服务，并默认打开 ip4 地址
3. prod 模式下使用 `terser-webpack-plugin` 压缩 js 输出代码
4. 支持多页面开发，只要有 index.html 文件，则自动匹配同目录下的 index.tsx 文件作为 entry 入口进行编译
5. 针对多页面开发，有公共代码`autoload.ts`，支持每个页面自动引用，好处是对于所有页面的统一设置可以写在`autoload.ts`里，比如全局样式设置，埋点脚本等。
6. 内置 analyzer 分析

## QA

1. 为什么使用`babel.config.json`而不是`.babelrc`?

如果是 Mono 仓库，`.babelrc`配置将不生效，推荐使用`babel.config.json`。参考：

-   https://github.com/facebook/jest/issues/6053#issuecomment-383632515
-   https://babeljs.io/docs/en/configuration

3. 为什么[webpack.base.ts](./config/webpack.base.ts)中针对`global.css`的 module 参数单独做处理？

global.css 存在的意义是全局 css 的设置或者预设，比如引用 tailwindcss 等，如果进行 module 参数化处理，会导致 build 出来的 class 找不到对应 classname 而导致样式失效。
