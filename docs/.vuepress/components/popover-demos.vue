<template>
  <div>
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
  </div>
</template>

<script>
import Button from "../../../src/button";
import Popover from "../../../src/popover";
export default {
  components: {
    "j-button": Button,
    "j-popover": Popover
  }
};
</script>