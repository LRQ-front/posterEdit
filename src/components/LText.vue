<template>
  <component
    :is="tag"
    :style="styleProps"
    class="l-text-component"
    @click="handleClick"
  >
    {{ text }}
  </component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  textDefaultProps,
  transfromToComponentProps,
  textStylePropsNames,
} from "@/defaultProps";
import useComponentCommon from "@/hooks/useComponentCommon";

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
    const { styleProps, handleClick } = useComponentCommon(
      props,
      textStylePropsNames
    );
    //抽离hook
    // //由于可能需要改动style，所以这里需要使用computed
    // const styleProps = computed(() => pick(props, textStylePropsNames));
    return {
      styleProps,
      handleClick,
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
  position: relative !important;
  box-sizing: border-box;
  white-space: pre-wrap;
}
</style>
