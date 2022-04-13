import DataPicker from './src/index.vue';

export const DataPickerPlugin = {
  install(app) {
    app.component('d-data-picker', DataPicker);
  },
};

export {
  DataPicker,
};
