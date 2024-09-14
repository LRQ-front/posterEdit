import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Editor from "../views/Editor.vue";
import TemplateDetail from "../views/TemplateDetail.vue";
import Index from "../index.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
      children: [
        {
          path: "/",
          name: "Home",
          component: Home,
        },
        {
          path: "/template/:id",
          name: "TemplateDetail",
          component: TemplateDetail,
        },
      ],
    },
    {
      path: "/editor",
      name: "Editor",
      component: Editor,
    },
  ],
});
