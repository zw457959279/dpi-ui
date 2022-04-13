import Upload from './src/index.vue';

export const UploadPlugin = {
  install(app) {
    app.component('d-upload', Upload);
  },
};

export {
  Upload,
};
