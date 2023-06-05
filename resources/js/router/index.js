import { createRouter, createWebHistory } from "vue-router";
import CollegesIndex from '../components/colleges/CollegesIndex.vue';

const routes = [
    {
        path: '/dashboard',
        name: 'colleges.index',
        component: CollegesIndex
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
});

