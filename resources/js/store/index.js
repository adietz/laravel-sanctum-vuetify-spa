import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';


import user from './user';

const vuexLocal = new VuexPersistence({
  storage: sessionStorage,
  key: 'laravel-sanctum-vuetify-spa',
  modules: [
    'user',
  ],
});

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
  },
  plugins: [ vuexLocal.plugin ]
});

export default store;
