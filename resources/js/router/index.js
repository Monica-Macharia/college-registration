import { createRouter, createWebHistory } from "vue-router";
import CoursesIndex from '../components/colleges/CoursesIndex.vue';
import CoursesEdit from '../components/colleges/CoursesEdit.vue';
const routes = [
    {
        path: '/dashboard',
        name: 'colleges.index',
        component: CoursesIndex
    },
    {
        path: '/dashboard/main',
        name: 'colleges.edit',
        component: CoursesEdit
    }
    
];

export default createRouter({
    history: createWebHistory(),
    routes
});

