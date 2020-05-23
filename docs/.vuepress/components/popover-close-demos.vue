<template>
  <div>
    <j-popover position="bottom">
      <j-button>点我</j-button>
      <template slot="content" slot-scope="{close}">
        <j-button @click="close">close</j-button>
      </template>
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