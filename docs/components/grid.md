---
title: Grid-网格
---

# 网格

预览

<ClientOnly>
<grid-demos></grid-demos>
</ClientOnly>

## 代码演示

```html
<j-row class="demoRow">
  <j-col span="8">
    <div class="demoCol">8</div>
  </j-col>
  <j-col span="8">
    <div class="demoCol">8</div>
  </j-col>
  <j-col span="8">
    <div class="demoCol">8</div>
  </j-col>
</j-row>

<j-row class="demoRow">
  <j-col span="6">
    <div class="demoCol">6</div>
  </j-col>
  <j-col span="6">
    <div class="demoCol">6</div>
  </j-col>
  <j-col span="6">
    <div class="demoCol">6</div>
  </j-col>
  <j-col span="6">
    <div class="demoCol">6</div>
  </j-col>
</j-row>

<j-row class="demoRow">
  <j-col span="4">
    <div class="demoCol">4</div>
  </j-col>
  <j-col span="4">
    <div class="demoCol">4</div>
  </j-col>
  <j-col span="4">
    <div class="demoCol">4</div>
  </j-col>
  <j-col span="4">
    <div class="demoCol">4</div>
  </j-col>
  <j-col span="4">
    <div class="demoCol">4</div>
  </j-col>
  <j-col span="4">
    <div class="demoCol">4</div>
  </j-col>
</j-row>

<j-row class="demoRow">
  <j-col span="2">
    <div class="demoCol">2</div>
  </j-col>
  <j-col span="2">
    <div class="demoCol">2</div>
  </j-col>
  <j-col span="2">
    <div class="demoCol">2</div>
  </j-col>
  <j-col span="2">
    <div class="demoCol">2</div>
  </j-col>
  <j-col span="2">
    <div class="demoCol">2</div>
  </j-col>
  <j-col span="2">
    <div class="demoCol">2</div>
  </j-col>
  <j-col span="2">
    <div class="demoCol">2</div>
  </j-col>
  <j-col span="2">
    <div class="demoCol">2</div>
  </j-col>
  <j-col span="2">
    <div class="demoCol">2</div>
  </j-col>
  <j-col span="2">
    <div class="demoCol">2</div>
  </j-col>
  <j-col span="2">
    <div class="demoCol">2</div>
  </j-col>
  <j-col span="2">
    <div class="demoCol">2</div>
  </j-col>
</j-row>
```

```css
.demoRow {
  display: flex;
  margin: 10px 0;
  flex-wrap: wrap;
}
.demoCol {
  height: 50px;
  border: 1px solid #ccc;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
```
