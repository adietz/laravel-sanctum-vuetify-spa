require('./bootstrap');
import Vue from 'vue';
import vuetify from '@/plugins/vuetify'; // path to vuetify export
import store from '@/store';
import router from '@/router';
import App from './App.vue';

new Vue({
    store,
    router,
    vuetify,
    render: h => h(App),
}).$mount('#app');
