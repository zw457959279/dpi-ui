import Checkbox from './src/index.vue';

export const CheckboxPlugin = {
  install(app) {
    app.component('d-checkbox', Checkbox);
  },
};

export {
  Checkbox,
};
