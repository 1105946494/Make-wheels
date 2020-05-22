<template>
  <div>
    <j-input v-model="value"></j-input>
    <div>value: {{value}}</div>
  </div>
</template>

<script>
import Input from "../../../src/input";

export default {
  data() {
    return {
      value: "1"
    };
  },
  components: {
    "j-input": Input
  }
};
</script>