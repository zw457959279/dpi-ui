import Switch from './src/index.vue';

export const SwitchPlugin = {
  install(app) {
    app.component('d-switch', Switch);
  },
};

export {
  Switch,
};
