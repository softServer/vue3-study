import { Vue, createApp } from 'vue'
import App from './App.vue'
import api from './api/install'
Vue.use(api)
createApp(App).mount('#app')
