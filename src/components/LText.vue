<template>
  <component :is="tag" :style="styleProps" class="l-text-component">
    {{ text }}
  </component>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import {
  textDefaultProps,
  transfromToComponentProps,
  textStylePropsNames,
} from "@/defaultProps";
import { pick } from "lodash-es";

const textProps = transfromToComponentProps(textDefaultProps);

export default defineComponent({
  name: "l-text",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    ...textProps,
  },
  setup(props) {
    //由于可能需要改动style，所以这里需要使用computed
    const styleProps = computed(() => pick(props, textStylePropsNames));
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
.l-text-component {
  box-sizing: border-box;
  white-space: pre-wrap;
}
</style>
