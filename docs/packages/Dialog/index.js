import Dialog from './src/index.vue';

export const DialogPlugin = {
  install(app) {
    app.component('d-dialog', Dialog);
  },
};

export {
  Dialog,
};
