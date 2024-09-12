import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import App from './App.vue'
import router from './router'
import VueSocialSharing from 'vue-social-sharing'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueSocialSharing)

app.mount('#app')
