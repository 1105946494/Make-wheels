<template>
  <div>
    <j-button>默认按钮</j-button>
    <j-button icon="ishezhi">设置按钮</j-button>
    <j-button :loading="true">加载按钮</j-button>
    <j-button icon="ixiazai">下载</j-button>
    <j-button icon="izan">点赞</j-button>
    <j-button icon="izuo">上一页</j-button>
    <j-button icon="iyou" icon-position="right">下一页</j-button>
  </div>
</template>

<script>
import Button from "../../../src/button";

export default {
  components: {
    "j-button": Button
  }
};
</script>
