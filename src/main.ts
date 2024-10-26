import '@/assets/main.css'
import { createApp } from 'vue'
import withUUID from 'vue-uuid'
import App from '@/App.vue'
import router from '@/router'

const app = withUUID(createApp(App))

app.use(router)

app.mount('#app')
