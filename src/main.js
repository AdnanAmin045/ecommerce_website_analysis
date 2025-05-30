import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vue-toastification/dist/index.css'
import Toast from 'vue-toastification'

createApp(App).use(Toast).use(router).mount('#app')
