import { createApp } from "vue";
import "./style.css";
import "./styles/index.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import mainStore from "./api/store";
import axios from "axios";
import VueAxios from "vue-axios";


const pinia = createPinia();
const app = createApp(App)

app.use(VueAxios,axios)
app.use(createPinia());
app.use(mainStore)
app.use(router)
app.use(pinia)
app.mount("#app");
