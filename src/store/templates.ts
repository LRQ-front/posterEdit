import { Module } from "vuex";
import { GlobalDataProps } from ".";

export interface TemplateProps {
  id: number;
  coverImg: string;
  title: string;
  author: string;
  copiedCount: number;
}

const templateData: TemplateProps[] = [
  {
    id: 1,
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-889755.png",
    title: "Template 1",
    author: "Author 1",
    copiedCount: 0,
  },
  {
    id: 2,
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-889755.png",
    title: "Template 1",
    author: "Author 1",
    copiedCount: 0,
  },
  {
    id: 3,
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-889755.png",
    title: "Template 1",
    author: "Author 1",
    copiedCount: 0,
  },
  {
    id: 4,
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-889755.png",
    title: "Template 1",
    author: "Author 1",
    copiedCount: 0,
  },
  {
    id: 5,
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-889755.png",
    title: "Template 1",
    author: "Author 1",
    copiedCount: 0,
  },
];

export interface TemplatesProps {
  data: TemplateProps[];
}

//Module为了让下面的getters的state参数能够有正确的类型推导
const templates: Module<TemplatesProps, GlobalDataProps> = {
  state: {
    data: templateData,
  },
  getters: {
    getTemplateById: (state) => (id: number) => {
      return state.data.find((item) => item.id === id);
    },
  },
};
export default templates;
