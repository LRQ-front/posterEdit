<template>
  <div>
    <a-row :gutter="30">
      <a-col
        :span="6"
        v-for="(item, index) in props.list"
        :key="index"
        class="poster-item"
      >
        <router-link :to="`/template/${1}`">
          <a-card hoverable>
            <template #cover>
              <img alt="example" class="poster-img" :src="item.imgUrl" />
              <div class="mask">
                <a-button type="primary" class="mask-btn"
                  >使用该模板创建</a-button
                >
              </div>
            </template>
            <a-card-meta :title="item.profile">
              <template #description>
                <div>
                  <span>作者：</span>
                  <span>{{ item.author }}</span>
                </div>
              </template>
            </a-card-meta>
          </a-card>
        </router-link>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  list: Array,
});
</script>

<style scoped>
.poster-item {
  position: relative;
  margin-bottom: 20px;
}
.poster-item .ant-card {
  border-radius: 12px;
}
.poster-item /deep/.ant-card-cover {
  overflow: hidden !important;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
.poster-img {
  widows: 100%;
  height: 390px;
}
.poster-item .mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 390px;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: all 0.3s ease-in-out;
  display: flex;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
.mask-btn {
  padding: 10px 20px;
  height: 40px;
  margin: auto;
}
.poster-item:hover .mask {
  opacity: 1;
}
.poster-item:hover .poster-img {
  transform: scale(1.2);
  transition: all 0.5s ease-in-out;
}
</style>
