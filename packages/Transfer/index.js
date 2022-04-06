import Transfer from './src/index.vue';

export const TransferPlugin = {
  install(app) {
    app.component('d-transfer', Transfer);
  },
};

export {
  Transfer,
};
