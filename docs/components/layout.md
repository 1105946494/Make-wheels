---
title: Layout-布局
---

# 布局

**预览**

布局一

<ClientOnly>
<layout-demos></layout-demos>
</ClientOnly>

## 代码演示

```html
<j-layout style="color: white; margin-bottom:50px;">
  <j-header style="height: 50px; background:lightskyblue;">header</j-header>
  <j-content style="height: 100px; background:deepskyblue;">content</j-content>
  <j-footer style="height: 50px; background:lightskyblue;">footer</j-footer>
</j-layout>
```

**预览**

布局二

<ClientOnly>
<layout2-demos></layout2-demos>
</ClientOnly>

## 代码演示

```html
<j-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <j-header style="height: 50px; background:lightskyblue;">header</j-header>
  <j-layout>
    <j-sider style="height: 100px; background:#ddd; width:200px; color: black;"
      >sider</j-sider
    >
    <j-content style="height: 100px; background:deepskyblue;"
      >content</j-content
    >
  </j-layout>
  <j-footer style="height: 50px; background:lightskyblue;">footer</j-footer>
</j-layout>
```

**预览**

布局三

<ClientOnly>
<layout3-demos></layout3-demos>
</ClientOnly>

## 代码演示

```html
<j-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <j-sider style=" background:#ddd; width:200px; color: black;">sider</j-sider>
  <j-layout>
    <j-header style="height: 50px; background:lightskyblue;">header</j-header>
    <j-content style="height: 100px; background:deepskyblue;"
      >content</j-content
    >
    <j-footer style="height: 50px; background:lightskyblue;">footer</j-footer>
  </j-layout>
</j-layout>
```
