import Button from './src/index.vue';

export const ButtonPlugin = {
  install(app) {
    app.component('d-button', Button);
  },
};

export {
  Button,
};
