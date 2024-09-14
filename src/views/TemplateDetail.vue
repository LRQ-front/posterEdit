<template>
  <div class="template-detail">
    <a-layout>
      <a-layout-content class="detail-container">
        <a-row justify="center" :gutter="20">
          <a-col :span="8">
            <img
              class="template-img"
              src="https://static.imooc-lego.com/upload-files/screenshot-889755.png"
              alt=""
            />
          </a-col>
          <a-col :span="8">
            <a-typography style="margin-bottom: 20px">
              <a-typography-title :level="3"
                >前端架构师直播海报</a-typography-title
              >
              <a-typography-text>未命名作品</a-typography-text>
            </a-typography>
            <a-space align="center" style="margin-bottom: 15px">
              <a-avatar size="middle">
                <template #icon><UserOutlined /></template>
              </a-avatar>
              <div>该模板由xx创作</div>
            </a-space>
            <div style="margin-bottom: 20px">
              <div>扫一扫，手机预览</div>
              <img class="code-img" src="" alt="" />
            </div>
            <a-space>
              <router-link to="/editor">
                <a-button type="primary" size="large" shape="round"
                  >使用模板</a-button
                >
              </router-link>
              <a-button shape="round" size="large"
                >下载图片海报</a-button
              ></a-space
            >
          </a-col>
        </a-row>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script></script>

<style scoped>
.template-detail {
  padding: 40px 0;
  background: #fff;
}
.detail-container {
  padding: 24px 0;
  background: #fff;
  min-height: 85vh;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}
.template-img {
  width: 100%;
}
.code-img {
  width: 120px;
  height: 120px;
}
</style>
