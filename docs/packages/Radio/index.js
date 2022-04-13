import Radio from './src/index.vue';

export const RadioPlugin = {
  install(app) {
    app.component('d-radio', Radio);
  },
};

export {
  Radio,
};
