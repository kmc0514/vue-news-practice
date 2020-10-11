import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../views/createListView.js';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            path: '/news',
            name: 'news',
            component: createListView('NewsView'),
            beforeEnter(to, from, next) {
                console.log('to', to);
                console.log('from', from);
                console.log(next);
                next();
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: createListView('JobsView')
        },        
        {
            path: '/ask',
            name: 'ask',
            component: createListView('AskView')
        },
        {
            path: '/user/:id',
            component: UserView
        },
        {
            path: '/item/:id',
            component: ItemView
        }
    ]
})