<template>
  <div class="j-button-group">
    <slot />
  </div>
</template>

<script>
export default {
  name: "buttongroup",
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if (name !== "button") {
        console.warn(
          `j-button-group 的子元素应该全是 j-button，但是你写的是 ${name}`
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.j-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .j-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>