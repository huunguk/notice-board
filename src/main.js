import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import funcPlugins from './plugins/func.js';
import objPlugins from './plugins/obj.js';

const app = createApp(App);
app.use(funcPlugins);
app.use(objPlugins, { name: '진' });
app.use(router);
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
