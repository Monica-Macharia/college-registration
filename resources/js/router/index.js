import { createRouter, createWebHistory } from "vue-router";
import CollegeIndex from '../components/colleges/CollegeIndex.vue';

const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: CollegeIndex,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;