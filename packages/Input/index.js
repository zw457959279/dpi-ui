import Input from './src/index.vue';

export const InputPlugin = {
  install(app) {
    app.component('d-input', Input);
  },
};

export {
  Input,
};
