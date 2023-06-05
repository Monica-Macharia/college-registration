
require('./bootstrap');


require('alpinejs');

import { createApp } from "vue";
import router from './router'
import CollegesIndex from "./components/colleges/CollegesIndex";

createApp({
    components: {
        CollegesIndex
    }
}).use(router).mount('#app')