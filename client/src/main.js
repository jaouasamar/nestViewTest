import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import store from './store'


import { library } from "@fortawesome/fontawesome-svg-core";
import { faStop,faStopwatch } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"





library.add(faStop,faStopwatch);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(store).mount('#app')
