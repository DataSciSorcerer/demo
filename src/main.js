import { createApp } from 'vue'
import {install} from '@icon-park/vue-next/es/all';
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import './style.css'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)

install(app); // use default prefix 'icon', eg: icon is People, name is icon-people.

app.mount('#app')
