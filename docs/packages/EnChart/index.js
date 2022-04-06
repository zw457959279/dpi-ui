import EnChart from './src/index.vue';

export const EnChartPlugin = {
  install(app) {
    app.component('d-en-chart', EnChart);
  },
};

export {
  EnChart,
};
