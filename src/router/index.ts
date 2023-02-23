import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/home/index.vue')
        }
    ]
})
export function setupRouter(app:App){
    app.use(router)
}
export default router