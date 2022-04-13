import Tooltip from './src/index.vue';

export const TooltipPlugin = {
  install(app) {
    app.component('d-tooltip', Tooltip);
  },
};

export {
  Tooltip,
};
