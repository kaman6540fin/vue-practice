import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueScrollTo from "vue-scrollto";
import VAnimateCss from 'v-animate-css';


createApp(App).use(store).use(router).use(VueScrollTo).use(VAnimateCss).mount("#app");
