import { createApp } from 'vue'
import App from './App.vue'
import './style/reset.scss';
import router from "./router";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import store from './store/index.js'
createApp(App)
.use(router)
.use(ElementPlus)
.use(store)
.mount('#app')
