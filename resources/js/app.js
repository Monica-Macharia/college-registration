
require('./bootstrap');


require('alpinejs');

import { createApp } from "vue";
import router from './router'
import CoursesIndex from "./components/colleges/CoursesIndex";
import CoursesEdit from "./components/colleges/CoursesEdit";
createApp({
    components: {
        CoursesIndex,
        CoursesEdit,
        
    }
}).use(router).mount('#app')