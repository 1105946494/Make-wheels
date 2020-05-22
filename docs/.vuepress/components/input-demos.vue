<template>
  <div>
    <j-input></j-input>
    <j-input value="警告" error="警告"></j-input>
    <j-input value="中文"></j-input>
    <j-input value="不可选" disabled></j-input>
    <j-input value="只读" readonly></j-input>
  </div>
</template>

<script>
import Input from "../../../src/input";

export default {
  components: {
    "j-input": Input
  }
};
</script>