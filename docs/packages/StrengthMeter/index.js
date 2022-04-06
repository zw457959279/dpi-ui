import StrengthMeter from './src/index.vue';

export const StrengthMeterPlugin = {
  install(app) {
    app.component('d-strength-meter', StrengthMeter);
  },
};

export {
  StrengthMeter,
};
