/* eslint-disable prettier/prettier */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的组件类侧边导航栏配置，请勿手动修改
 */

 import { createRouter, createWebHashHistory } from 'vue-router'

 const routes = [{{ routes }}];
 
 const routerConfig = {
   history: createWebHashHistory(),
   routes,
   scrollBehavior(to, from) {
     if (to.path !== from.path) {
       return { top: 0 };
     }
   },
 };
 
 const router = createRouter(routerConfig);
 
 export default router;
