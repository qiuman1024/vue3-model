// 引入全局样式文件
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 引入element-plus
import ElementPlus from 'element-plus'
app.use(ElementPlus)

app.mount('#app')
