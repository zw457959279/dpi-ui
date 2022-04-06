import CountTo from './src/index.vue';

export const CountToPlugin = {
  install(app) {
    app.component('d-count-to', CountTo);
  },
};

export {
  CountTo,
};
