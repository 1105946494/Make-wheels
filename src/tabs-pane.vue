<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabsPane",
  inject: ["eventBus"],
  props: {
    name: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    classes() {
      return { active: this.active };
    }
  },
  data() {
    return {
      active: false
    };
  },
  created() {
    this.eventBus.$on("update:selected", name => {
      if (name === this.name) {
        this.active = true;
      } else {
        this.active = false;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.tabs-pane {
  padding: 1em;
}
</style>