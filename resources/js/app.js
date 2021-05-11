require('./bootstrap');

import Vue from 'vue'
import App from './App.vue'

//Vuetify
import Vuetify from 'vuetify';
Vue.use(Vuetify); 


// Globally Registered Components
import './globalComponents.js'

// Vue Router
import router from './router'

// Vuex Store
import store from './store/store'

//V Calendar
import VCalendar from 'v-calendar';
Vue.use(VCalendar);

//Load mixin
import notification from './mixin/notification'
Vue.use(notification);

new Vue({
    router,
    store,
    vuetify:new Vuetify(),
    render: h => h(App)
}).$mount('#app')
