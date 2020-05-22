---
title: collapse-折叠面板
---

# 折叠面板

**预览**

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
</j-collapse>
{{selectedTab}}
```

```js
export default {
  data() {
    return {
      selectedTab: ["等待选中"],
    };
  },
};
```
