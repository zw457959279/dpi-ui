import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/style/markdown.css';
import './assets/style/element-plus.css'
import './assets/style/elementBase.less';
import DLib from '../packages';
import Preview from './components/Preview.vue';

const app = createApp(App)
app.component('Preview', Preview)
app.use(DLib).use(router).mount('#app')
