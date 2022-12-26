import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
// import About from '@/views/AboutPage.vue'
// import Brazil from '@/views/Brazil.vue'
// import Hawaii from '@/views/Hawaii.vue'
// import Mexico from '@/views/Mexico.vue'
// import Canada from '@/views/Canada.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/destination/:slug', name:'destination.show', component: ()=>import('@/views/DestinationShow.vue')}
]

const router = createRouter ({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active-link'
})

export default router