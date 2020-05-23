---
title: Button-按钮
---

# 单个按钮

**预览**

<ClientOnly>
<button-demos></button-demos>
</ClientOnly>

## 代码演示

```html
<j-button>默认按钮</j-button>
<j-button icon="ishezhi">设置按钮</j-button>
<j-button :loading="true">加载按钮</j-button>
<j-button icon="ixiazai">下载</j-button>
<j-button icon="izan">点赞</j-button>
<j-button icon="izuo">上一页</j-button>
<j-button icon="iyou" icon-position="right">下一页</j-button>
```

# 按钮组合

可以将多个 **button** 放入 **button-group** 容器中，通过 **icon-position** 属性调整 **icon** 的位置

**预览**

<ClientOnly>
<button-group-demos></button-group-demos>
</ClientOnly>

## 代码演示

```html
<j-button-group>
  <j-button icon="izuo">上一页</j-button>
  <j-button>更多</j-button>
  <j-button icon="iyou" icon-position="right">下一页</j-button>
</j-button-group>
```
