---
title: collapse-折叠面板
---

# 折叠面板

可以折叠展开的区域，可以设置单个区域展开

**预览**

## 单个区域展开

<ClientOnly>
<collapse-demos></collapse-demos>
</ClientOnly>

---

---

## 代码演示

```html
<j-collapse :selected.sync="selectedTab" single>
  <j-collapse-item title="标题1" name="1">内容1</j-collapse-item>
  <j-collapse-item title="标题2" name="2">内容2</j-collapse-item>
  <j-collapse-item title="标题3" name="3">内容3</j-collapse-item>
  <j-collapse-item title="标题4" name="4">内容4</j-collapse-item>
</j-collapse>
```

## 设置 single

不添加 single 就可以默认全部展开

**预览**

<ClientOnly>
<collapse2-demos></collapse2-demos>
</ClientOnly>

---

---

## 代码演示

```html
<j-collapse :selected.sync="selectedTab">
  <j-collapse-item title="标题1" name="1">内容1</j-collapse-item>
  <j-collapse-item title="标题2" name="2">内容2</j-collapse-item>
  <j-collapse-item title="标题3" name="3">内容3</j-collapse-item>
  <j-collapse-item title="标题4" name="4">内容4</j-collapse-item>
</j-collapse>
```
