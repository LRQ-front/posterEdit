<template>
  <div class="content-wrapper">
    <template-list :list="testData"></template-list>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import TemplateList from "../components/TemplateList.vue";
export default defineComponent({
  components: {
    TemplateList,
  },
  setup() {
    const testData = ref([
      {
        id: 1,
        profile: "模板1",
        author: "张三",
        imgUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      },
      {
        id: 2,
        profile: "模板2",
        author: "张三",
        imgUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      },
      {
        id: 3,
        profile: "模板3",
        author: "张三",
        imgUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      },
      {
        id: 3,
        profile: "模板3",
        author: "张三",
        imgUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      },

      {
        id: 3,
        profile: "模板3",
        author: "张三",
        imgUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      },

      {
        id: 3,
        profile: "模板3",
        author: "张三",
        imgUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      },

      {
        id: 3,
        profile: "模板3",
        author: "张三",
        imgUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      },
    ]);
    return {
      testData,
    };
  },
});
</script>

<style scoped>
.content-wrapper {
  padding: 100px;
}
</style>
