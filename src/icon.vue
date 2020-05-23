<template>
  <svg class="j-icon">
    <use :xlink:href="`#${name}`" />
  </svg>
</template>

<script>
import "./svg";
export default {
  name: "Icon",
  props: ["name"],
};
</script>

<style lang="scss" scoped>
.j-icon {
  width: 1em;
  height: 1em;
}
</style>
