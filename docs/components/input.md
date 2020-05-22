---
title: Input-输入框
---

# 输入框

预览

<ClientOnly>
<input-demos></input-demos>
</ClientOnly>

## 代码演示

```html
<j-input></j-input>
<j-input value="警告" error="警告"></j-input>
<j-input value="中文"></j-input>
<j-input value="不可选" disabled></j-input>
<j-input value="只读" readonly></j-input>
```

# 双向绑定

预览

<ClientOnly>
<input-bind-demos></input-bind-demos>
</ClientOnly>

## 代码演示

```html
<j-input v-model="value"></j-input>
<div>value: {{value}}</div>
```

```js
data() {
    return {
      value: "1"
    };
  },
```
