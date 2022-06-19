import { createApp } from 'vue'
import App from "./App.vue";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from "./router"
import i18n from "./translation"


createApp(App).use(router).use(i18n).mount('#app')
