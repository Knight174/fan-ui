import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import {createWebHashHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc}
  ]
})

createApp(App).use(router).mount('#app') // 一起写：

// 分开写：
// const app = createApp(App)
// app.use(router)
// app.mount('#app')