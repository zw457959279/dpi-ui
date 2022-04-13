import Icon from './src/index.vue';

export const IconPlugin = {
  install(app) {
    app.component('d-icon', Icon);
  },
};

export {
  Icon,
};
