---
title: Toast-弹出提示(吐司)
---

# 弹出提示(吐司)

实现弹出消息/通知

## this.\$toast

**预览**

<ClientOnly>
<toast-demos></toast-demos>
</ClientOnly>

## 代码演示

```html
<j-button @click="$toast('点击弹出提示')">上方弹出</j-button>
<j-button @click="$toast('点击弹出提示', {position:'middle'})"
  >中间弹出</j-button
>
<j-button @click="$toast('点击弹出提示', {position:'bottom'})"
  >下方弹出</j-button
>
```

## 设置关闭按钮

**预览**

<ClientOnly>
<toast-close-demos></toast-close-demos>
</ClientOnly>

## 代码演示

```html
<j-button @click="onClickButton">上方弹出</j-button>
```

```js
methods: {
    onClickButton() {
      this.$toast("你知道我在等你吗？", {
        closeButton: {
          text: "知道了",
          callback: () => {
            console.log("他说知道了");
          }
        }
      });
    }
  }
};
```
