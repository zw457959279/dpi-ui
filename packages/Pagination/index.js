import Pagination from './src/index.vue';

export const PaginationPlugin = {
  install(app) {
    app.component('d-pagination', Pagination);
  },
};

export {
  Pagination,
};
