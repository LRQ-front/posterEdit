import { computed } from "vue";
import { pick } from "lodash-es";

/**
 *
 * @param props 组件属性
 * @param picks 剔除的组件属性
 * @returns 返回挑选的组件属性和点击事件
 */
const useComponentCommon = <T extends { [key: string]: any }>(
  props: T,
  picks: string[]
) => {
  const styleProps = computed(() => pick(props, picks));
  const handleClick = () => {
    if (props.actionType == "url" && props.url) {
      window.location.href = props.url;
    }
  };
  return {
    styleProps,
    handleClick,
  };
};

export default useComponentCommon;
