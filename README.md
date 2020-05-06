# 简造 - 一个 Vue UI 组件

[![Build Status](https://travis-ci.org/1105946494/Make-wheels.svg?branch=master)](https://travis-ci.org/1105946494/Make-wheels)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用。

## 开始使用

1. 添加 CSS 样式

使用本框架前，请在 css 中开启 border-box

```
  *,*::before,*::after{box-sizing: border-box;}
```

IE 8 及以上浏览器都支持此样式。

你还需要设置默认颜色等变量（后续会改为 SCSS 变量）

```
 html {
   --button-height: 32px;
   --font-size: 14px;
   --button-bg: white;
   --button-active-bg: #eee;
   --border-radius: 4px;
   --color: #333;
   --border-color: #999;
   --border-color-hover: #666;
 }
```

IE 15 及以上浏览器都支持此样式。

2. 安装 make-wheels

```
 npm i --save make-wheels
```

3. 引入 make-wheels

```
import {Button, ButtonGroup, Icon} from 'make-wheels'
import 'make-wheels/dist/index.css'

export default {
  name: 'app',
  components: {
    'g-button': Button,
    'g-icon': Icon
  }
}
```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
