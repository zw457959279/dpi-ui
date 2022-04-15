import Echart from './src/index.vue';

export const EchartPlugin = {
  install(app) {
    app.component('d-echart', Echart);
  },
};

export {
  Echart,
};
