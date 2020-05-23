---
title: Popover-弹出层
---

# 弹出层

点击/鼠标移入元素，弹出气泡式的卡片浮层。

## Click 触发

**预览**

<ClientOnly>
<popover-demos></popover-demos>
</ClientOnly>

## 代码演示

```html
<j-popover>
  <j-button>上方弹出</j-button>
  <template slot="content">弹出内容</template>
</j-popover>
<j-popover position="bottom">
  <j-button>下方弹出</j-button>
  <template slot="content">弹出内容</template>
</j-popover>
<j-popover position="left">
  <j-button>左边弹出</j-button>
  <template slot="content">弹出内容</template>
</j-popover>
<j-popover position="right">
  <j-button>右边弹出</j-button>
  <template slot="content">弹出内容</template>
</j-popover>
```

## 将触发方式改为 hover

**预览**

<ClientOnly>
<popover-hover-demos></popover-hover-demos>
</ClientOnly>

## 代码演示

```html
<j-popover trigger="hover">
  <j-button>上方弹出</j-button>
  <template slot="content">弹出内容</template>
</j-popover>
<j-popover position="bottom" trigger="hover">
  <j-button>下方弹出</j-button>
  <template slot="content">弹出内容</template>
</j-popover>
<j-popover position="left" trigger="hover">
  <j-button>左边弹出</j-button>
  <template slot="content">弹出内容</template>
</j-popover>
<j-popover position="right" trigger="hover">
  <j-button>右边弹出</j-button>
  <template slot="content">弹出内容</template>
</j-popover>
```

## 支持 HTML，设置内部关闭

**预览**

<ClientOnly>
<popover-close-demos></popover-close-demos>
</ClientOnly>

## 代码演示

```html
<j-popover position="bottom">
  <j-button>点我</j-button>
  <template slot="content" slot-scope="{close}"
    ><j-button @click="close">close</j-button></template
  >
</j-popover>
```
