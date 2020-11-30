import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import Cpc from './components/Cpc.vue'
import Cpc2 from './components/Cpc2.vue'

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Cpc},
    {path: '/cpc2', component: Cpc2}
  ]
})

createApp(App).use(router).mount('#app') // 一起写：

// 分开写：
// const app = createApp(App)
// app.use(router)
// app.mount('#app')