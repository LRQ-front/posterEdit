<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
});
</script>

<style scoped>
.content-wrapper {
  background-color: #fff;
  padding: 0 50px;
}
</style>
