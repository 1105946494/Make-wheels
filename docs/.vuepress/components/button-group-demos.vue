<template>
  <div>
    <j-button-group>
      <j-button icon="izuo">上一页</j-button>
      <j-button>更多</j-button>
      <j-button icon="iyou" icon-position="right">下一页</j-button>
    </j-button-group>
  </div>
</template>

<script>
import Button from "../../../src/button";
import Buttongroup from "./../../src/button-group";

export default {
  components: {
    "j-button": Button,
    "j-button-group": Buttongroup
  }
};
</script>
