import { Module } from "vuex";
import { GlobalDataProps } from ".";
import { v4 as uuidv4 } from "uuid";

export interface EditorProps {
  components: ComponentData[];
  currentElement: string;
}

interface ComponentData {
  //利用uuid生成
  id: string;
  props: {
    [key: string]: any;
  };
  name: string;
}

export const componentData = [
  { id: uuidv4(), props: { text: "hello" }, name: "l-text" },
  { id: uuidv4(), props: { text: "hello" }, name: "l-text" },
  { id: uuidv4(), props: { text: "hello" }, name: "l-text" },
];

const editor: Module<EditorProps, GlobalDataProps> = {
  state: {
    components: componentData,
    currentElement: "",
  },
};

export default editor;
