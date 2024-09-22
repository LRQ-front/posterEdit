<template>
  <div class="editor">
    <a-layout class="editor-content">
      <a-layout-sider width="300" style="background-color: yellow">
        <div class="components-box">组件区域</div>
      </a-layout-sider>
      <a-layout>
        <a-layout-content class="canvas-container">
          <p style="text-align: center">画布区域</p>
          <div class="preview-list">
            <component
              v-for="component in components"
              :key="component.id"
              :is="component.name"
              v-bind="component.props"
            ></component>
          </div>
        </a-layout-content>
      </a-layout>
      <a-layout-sider width="300" style="background-color: pink">
        <div>属性区域</div>
      </a-layout-sider>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import LText from "../components/LText.vue";
import { GlobalDataProps } from "../store/index";

export default defineComponent({
  components: {
    LText,
  },
  setup() {
    const store = useStore<GlobalDataProps>();
    const components = computed(() => store.state.editor.components);
    return {
      components,
    };
  },
});
</script>

<style scoped>
.editor {
  width: 100vw;
}
.editor-content {
  height: calc(100vh - 64px);
}
.editor-title {
  font-size: 20px;
  font-weight: bold;
}
.canvas-container {
  padding: 24px;
}
.preview-list {
  width: 400px;
  height: 400px;
  background: #fff;
  margin: auto;
}
</style>
