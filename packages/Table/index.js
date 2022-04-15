import Table from './src/index.vue';

export const TablePlugin = {
  install(app) {
    app.component('d-table', Table);
  },
};

export {
  Table,
};
