import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faMinus, faCaretDown, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueGtag from "vue-gtag";

library.add(faPlus, faMinus, faCaretDown, faCheckCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueGtag, {
  config: { id: "UA-22060307-2" }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
