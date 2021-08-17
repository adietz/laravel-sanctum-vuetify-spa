import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import { get } from 'lodash-es';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "views" */ '@/views/Home.vue'),
        meta: {
            auth: true
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "auth" */ '@/views/Login.vue'),
        meta: {
            auth: false
        },
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "auth" */ '@/views/Register.vue'),
        meta: {
            auth: false
        },
    },

];

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.auth && !get(store, 'state.user.authenticated', false)) {
        next({name: 'Login'});
    } else {
        next();
    }
});

export default router;
