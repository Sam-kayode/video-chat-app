import Vue from 'vue'
import App from './App.vue'
import router from './router'
import WebRTC from 'vue-webrtc'
import * as io from 'socket.io-client'
import VueClipboard from 'vue-clipboard2'

import {library} from '@fortawesome/fontawesome-svg-core'

import {faTrash,faPodcast, faVideo, faUser, faClipboard} from '@fortawesome/free-solid-svg-icons'

library.add(faTrash, faPodcast, faVideo, faUser, faClipboard)
window.io=io
VueClipboard.config.autoSetContainer = true
Vue.config.productionTip = false
 Vue.use(WebRTC)
Vue.use(VueClipboard)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
