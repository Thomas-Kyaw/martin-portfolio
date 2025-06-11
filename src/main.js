import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap-icons/font/bootstrap-icons.css'
import AOS from 'aos'

const app = createApp(App)
AOS.init()

app.use(router)

app.mount('#app')
