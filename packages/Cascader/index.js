import Cascader from './src/index.vue';

export const CascaderPlugin = {
  install(app) {
    app.component('d-cascader', Cascader);
  },
};

export {
  Cascader,
};
