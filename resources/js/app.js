import { createApp } from "vue";
import router from "./router";
import CollegeIndex from "./components/colleges/CollegeIndex";

createApp({
  components: {
    CollegeIndex,
  },
})
  .use(router)
  .mount("#app");