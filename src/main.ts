import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import './styles/reset.scss'
import './styles/element-theme.sass'
import locale from 'element-plus/lib/locale/lang/zh-cn' // 中文
import './styles/color.scss'
import * as icons from '@element-plus/icons-vue'
import router from './router'
// import 'element-plus/dist/index.css'
import App from './App.vue'
// import store from './store'
import { store, key } from './store'

const app = createApp(App)
// eslint-disable-next-line no-shadow
Object.keys(icons).forEach((key) => {
  app.component(key, icons[key])
})

app.use(router).use(ElementPlus, { locale }).use(store, key).mount('#app')

// createApp(App)
//   .use(router)
//   .use(ElementPlus, { locale })
//   .use(store, key)
//   .mount('#app')
