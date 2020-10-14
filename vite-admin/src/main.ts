import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router';
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
console.log(process.env)
const app = createApp(App)
app.config.productionTip = false
app.use(router)
app.use(store)
app.use(Antd)
app.mount('#app')
