<template>
  <button class="g-button" :class="{ [`icon-${iconPosition}`]: true }">
    <g-icon class="icon" v-if="icon" :name="icon"></g-icon>
    <g-icon class="loading" name="ijiazai"></g-icon>
    <div class="content">
      <slot />
    </div>
  </button>
</template>

<script>
export default {
  //   props: ["icon", "iconPosition"],
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading {
  animation: spin 2s infinite linear;
}
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .icon {
    margin-right: 0.1em;
    order: 1;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      margin-right: 0em;
      margin-left: 0.1em;
      order: 2;
    }
    > .content {
      order: 1;
    }
  }
}
</style>
