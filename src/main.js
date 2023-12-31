import { createApp } from "vue";
import "./style.css";
import "./styles/index.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import mainStore from "./api/store";
import "vue3-toastify/dist/index.css";

const pinia = createPinia();
const app = createApp(App);

app.use(mainStore);
app.use(router);
app.use(pinia);
app.mount("#app");
