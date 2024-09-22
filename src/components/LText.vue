<template>
  <component :is="tag" :style="styleProps" class="l-text-component">
    {{ text }}
  </component>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { pick } from "lodash-es";

export default defineComponent({
  name: "l-text",
  props: {
    fontSize: {
      type: String,
    },
    tag: {
      type: String,
      default: "div",
    },
    text: {
      type: String,
    },
  },
  setup(props) {
    //由于需要改动style，所以这里需要使用computed
    const styleProps = computed(() => pick(props, ["fontSize"]));
    return {
      styleProps,
    };
  },
});
</script>

<style scoped>
h2.l-text-component,
p.l-text-component {
  margin-bottom: 0;
}
button.l-text-component {
  padding: 5px 10px;
  cursor: pointer;
}
</style>
