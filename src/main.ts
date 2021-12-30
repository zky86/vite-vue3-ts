import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import './styles/element-theme.sass'
import locale from 'element-plus/lib/locale/lang/zh-cn' // 中文
import './styles/reset.scss'
import router from './router'
// import 'element-plus/dist/index.css'
import App from './App.vue'
import store from './store'

createApp(App).use(router).use(ElementPlus, { locale }).use(store).mount('#app')
