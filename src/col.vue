<template>
  <div class="col" :class="`col-${span}`">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Col",
  props: { span: Number }
};
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  background: grey;
  width: 50%;

  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
}
</style>