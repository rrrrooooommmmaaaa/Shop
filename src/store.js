import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        cart: []
    },
    mutations: {
        setCart: (state, item) => state.cart.push(item)
    },
    getters: {
        getCart: (state) => state.cart
    }
})
export default store;