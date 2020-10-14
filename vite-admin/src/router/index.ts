import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [

    {
        path: '/',
        component: () => import('../views/Main.vue'),
        children: [
            {
                name: 'home', path: '/', component: () => import('../views/Home.vue')
            },
            {
                name: 'courses-list', path: '/courses/list', component: () => import('../views/course/CourseList.vue')
            },
            {
                name: 'episodes-list', path: '/episodes/list', component: () => import('../views/episode/EpisodeList.vue')
            },
        ]
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router