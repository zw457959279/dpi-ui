<template>
  <div class="d-doc">
    <aside class="fixed">
      <router-link v-for="(link, index) in data.links" :key="index" :to="link.path">{{ link.name }}</router-link>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import ComponentList from 'packages/list.json';
import { reactive, ref } from 'vue'

const data = reactive({
  links: ComponentList.map(item => ({
    path: `/components/${item.compName}`,
    name: item.compZhName
  }))
})
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}
.d-doc {
  display: flex;
  min-height: 100vh;
  aside {
    width: 200px;
    padding: 15px;
    border-right: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    a{
      color: #1890ff;
      font-size: 14px;
      font-weight: 700;
      height: 22px;
      line-height: 22px;
    }
  }
  main {
    width: 100%;
    flex: 1;
    padding: 15px;
    box-sizing: border-box;
  }

  .fixed {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    box-sizing: border-box;
  }
}
</style>