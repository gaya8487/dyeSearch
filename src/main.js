import { createApp } from 'vue'
import App from './App.vue'


//bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

//v-tooltip
import tooltip from "./directives/tooltip.js";
import "./assets/tooltip.css";

//GA
import VueGtag from 'vue-gtag-next'


const app = createApp(App);
// app.directive's first argument is the directive's name you will use
// it can be whatever you wish
app.directive("tooltip", tooltip);

app.use(VueGtag,{
    property : {id : 'G-BP0X6SK19K'}
});

app.mount("#app");

