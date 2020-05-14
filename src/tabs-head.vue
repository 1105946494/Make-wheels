<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabsHead",
  inject: ["eventBus"]
};
</script>

<style lang="scss" scoped>
$tab-head: 40px;
.tabs-head {
  display: flex;
  height: $tab-head;
  justify-content: flex-start;
  border: 1px solid red;
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>