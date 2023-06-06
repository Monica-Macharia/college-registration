
require('./bootstrap');


require('alpinejs');

import { createApp } from "vue";
import router from './router'
import CoursesIndex from "./components/colleges/CoursesIndex";

createApp({
    components: {
        CoursesIndex,
        
    }
}).use(router).mount('#app')