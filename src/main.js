import { createApp } from 'vue'
import App from './App.vue'

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

//v-tooltip
import tooltip from "./directives/tooltip.js";
import "./assets/tooltip.css";


const app = createApp(App);
// app.directive's first argument is the directive's name you will use
// it can be whatever you wish
app.directive("tooltip", tooltip);
app.mount("#app");