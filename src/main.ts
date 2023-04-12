import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/styles/main.scss'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
const app = createApp(App)
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
app.use(createPinia())
app.use(router)
app.use(Quasar, {
  plugins: {} 
})
app.mount('#app')
