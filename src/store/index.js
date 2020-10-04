import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        asks: [],
        jobs: [],
        user: {},
        comment: []
    },
    getters,
    mutations,
    actions
})