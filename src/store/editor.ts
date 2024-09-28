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
  {
    id: uuidv4(),
    props: { text: "hello1", fontSize: "20px", color: "pink" },
    name: "l-text",
  },
  {
    id: uuidv4(),
    props: { text: "hello2", fontSize: "14px", fontWeight: "bold" },
    name: "l-text",
  },
  {
    id: uuidv4(),
    props: { text: "hello3", fontSize: "20px", textAlign: "center" },
    name: "l-text",
  },
];

const editor: Module<EditorProps, GlobalDataProps> = {
  state: {
    components: componentData,
    currentElement: "",
  },
};

export default editor;
