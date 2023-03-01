import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'amfe-flexible'
import App from './App.vue'
import router from './router'

import vant from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vant)

app.mount('#app')
 