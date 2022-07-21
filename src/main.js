import { createApp } from 'vue'
import App from './App.vue'
import MyFooter from './MyFooter.vue'


//bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

//v-tooltip
import tooltip from "./directives/tooltip.js";
import "./assets/tooltip.css";


const app = createApp(App);
const myFooter = createApp(MyFooter);
// app.directive's first argument is the directive's name you will use
// it can be whatever you wish
app.directive("tooltip", tooltip);

myFooter.mount("#myFooter");
app.mount("#app");

