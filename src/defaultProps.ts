import { mapValues, without } from "lodash-es";

//所有组件通用的属性
export const componentDefaultProps = {
  //action
  actionType: "",
  url: "",
  //size
  height: "",
  width: "318px",
  paddingLeft: "0px",
  paddingRight: "0px",
  paddingTop: "0px",
  paddingBottom: "0px",
  //border
  boderStyle: "none",
  borderWidth: "0px",
  borderColor: "#000000",
  borderRadius: "0px",
  //shadow and opacity
  boxShadow: "0 0 0 #000",
  opacity: "1",
  //position and xy
  position: "absolute",
  left: "0px",
  top: "0px",
  right: "0px",
};
//文本组件默认属性
export const textDefaultProps = {
  text: "正文内容",
  fontSize: "14px",
  color: "#000000",
  fontFamily: "",
  fontWeight: "normal",
  fontStyle: "normal",
  textDecoration: "none",
  lineHeight: "1",
  textAlign: "left",
  backgroundColor: "",
  //以及通用属性
  ...componentDefaultProps,
};

//文本组件的样式属性，分为其他属性和样式属性
export const textStylePropsNames = without(
  Object.keys(textDefaultProps),
  "text",
  "actionType",
  "url"
);

/**
 * 将组件的默认属性对象转换为改组件属性
 * @param props 组件属性对象
 * @returns 组件属性
 */
export const transfromToComponentProps = <T extends { [key: string]: any }>(
  props: T
) => {
  return mapValues(props, (item) => {
    return {
      type: item.constructor,
      default: item,
    };
  });
};
