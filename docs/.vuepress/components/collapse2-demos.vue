<template>
  <div>
    <j-collapse :selected.sync="selectedTab">
      <j-collapse-item title="标题1" name="1">内容1</j-collapse-item>
      <j-collapse-item title="标题2" name="2">内容2</j-collapse-item>
      <j-collapse-item title="标题3" name="3">内容3</j-collapse-item>
      <j-collapse-item title="标题4" name="4">内容4</j-collapse-item>
    </j-collapse>
    <hr />
    {{selectedTab}}
  </div>
</template>

<script>
import Collapse from "../../../src/collapse.vue";
import CollapseItem from "../../../src/collapse-item";

export default {
  data() {
    return {
      selectedTab: []
    };
  },
  components: {
    "j-collapse": Collapse,
    "j-collapse-item": CollapseItem
  }
};
</script>