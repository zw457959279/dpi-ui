import {{ compName }} from './src/index.vue';

export const {{ compName }}Plugin = {
  install(app) {
    app.component('d-{{ compClassName }}', {{ compName }});
  },
};

export {
  {{ compName }},
};
