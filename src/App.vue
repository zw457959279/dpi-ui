<template>
  <div class="d-doc">
    <aside class="fixed">
      <router-link v-for="(link, index) in data.links" :key="index" :to="link.path">{{ link.name }}</router-link>
    </aside>
    <main>
      <el-config-provider :locale="locale">
        <router-view></router-view>
      </el-config-provider>
    </main>
  </div>
</template>

<script setup>
import ComponentList from 'packages/list.json';
import { reactive, ref } from 'vue';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import { ElConfigProvider } from 'element-plus';

const locale = ref(zhCn);
const data = reactive({
  links: ComponentList.map(item => ({
    path: `/components/${item.compName}`,
    name: item.compZhName
  }))
})
</script>

<style lang="less">
@import url('./assets/style/element-plus.css');
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
    width: calc(100% - 200px);
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