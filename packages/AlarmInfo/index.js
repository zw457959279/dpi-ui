import AlarmInfo from './src/index.vue';

export const AlarmInfoPlugin = {
  install(app) {
    app.component('d-alarm-info', AlarmInfo);
  },
};

export {
  AlarmInfo,
};
