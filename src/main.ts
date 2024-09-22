import { createApp } from "vue";
import store from "./store";
import Antd from "ant-design-vue";
import router from "./router";
import "ant-design-vue/dist/reset.css";
import App from "./App.vue";

createApp(App).use(Antd).use(router).use(store).mount("#app");
