import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
import VueSimpleAlert from "vue3-simple-alert-next";

createApp(App).use(router).use(VueToast, {
  position:'top'
}).use(VueSimpleAlert).mount('#app')
