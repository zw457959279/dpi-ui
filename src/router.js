/* eslint-disable prettier/prettier */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的组件类侧边导航栏配置，请勿手动修改
 */

 import { createRouter, createWebHashHistory } from 'vue-router'

 const routes = [{
    title: '数字动画组件',
    name: 'CountTo',
    path: '/components/CountTo',
    component: () => import('packages/CountTo/docs/README.md'),
  },{
    title: '水平位移图',
    name: 'EnChart',
    path: '/components/EnChart',
    component: () => import('packages/EnChart/docs/README.md'),
  },{
    title: '预警消息',
    name: 'AlarmInfo',
    path: '/components/AlarmInfo',
    component: () => import('packages/AlarmInfo/docs/README.md'),
  },{
    title: '级联选择器',
    name: 'Cascader',
    path: '/components/Cascader',
    component: () => import('packages/Cascader/docs/README.md'),
  },{
    title: '选择器',
    name: 'Select',
    path: '/components/Select',
    component: () => import('packages/Select/docs/README.md'),
  },{
    title: '文字提示',
    name: 'Tooltip',
    path: '/components/Tooltip',
    component: () => import('packages/Tooltip/docs/README.md'),
  },{
    title: '穿梭框',
    name: 'Transfer',
    path: '/components/Transfer',
    component: () => import('packages/Transfer/docs/README.md'),
  },{
    title: '对话框',
    name: 'Dialog',
    path: '/components/Dialog',
    component: () => import('packages/Dialog/docs/README.md'),
  },{
    title: '分页',
    name: 'Pagination',
    path: '/components/Pagination',
    component: () => import('packages/Pagination/docs/README.md'),
  },{
    title: '输入框',
    name: 'Input',
    path: '/components/Input',
    component: () => import('packages/Input/docs/README.md'),
  },{
    title: '日期选择器',
    name: 'DataPicker',
    path: '/components/DataPicker',
    component: () => import('packages/DataPicker/docs/README.md'),
  },{
    title: '按钮',
    name: 'Button',
    path: '/components/Button',
    component: () => import('packages/Button/docs/README.md'),
  },{
    title: '多选框',
    name: 'Checkbox',
    path: '/components/Checkbox',
    component: () => import('packages/Checkbox/docs/README.md'),
  },{
    title: '单选框',
    name: 'Radio',
    path: '/components/Radio',
    component: () => import('packages/Radio/docs/README.md'),
  },{
    title: '开关',
    name: 'Switch',
    path: '/components/Switch',
    component: () => import('packages/Switch/docs/README.md'),
  },{
    title: '上传',
    name: 'Upload',
    path: '/components/Upload',
    component: () => import('packages/Upload/docs/README.md'),
  }];
 
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
