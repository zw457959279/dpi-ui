import Select from './src/index.vue';

export const SelectPlugin = {
  install(app) {
    app.component('d-select', Select);
  },
};

export {
  Select,
};
