import Menu from './src/index.vue';

export const MenuPlugin = {
  install(app) {
    app.component('d-menu', Menu);
  },
};

export {
  Menu,
};
