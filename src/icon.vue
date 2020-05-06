<template>
  <svg class="g-icon">
    <use :xlink:href="`#${name}`" />
  </svg>
</template>

<script>
import "./svg";
export default {
  name: "Icon",
  props: ["name"]
};
</script>

<style lang="scss" scoped>
.g-icon {
  width: 1em;
  height: 1em;
}
</style>
