import { createRouter, createWebHistory } from "vue-router";
import CoursesIndex from '../components/colleges/CoursesIndex.vue';

const routes = [
    {
        path: '/dashboard',
        name: 'colleges.index',
        component: CoursesIndex
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
});

