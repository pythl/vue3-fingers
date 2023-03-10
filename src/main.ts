import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from '@/router'
import { setupPlugins } from './plugins'
import "@/assets/styles/globle.scss"
async function bootstrap() {
    const app = createApp(App)
    setupRouter(app)
    setupPlugins(app)
    await router.isReady()
    app.mount('#app')
}

// app.use(router)

bootstrap()