import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null,
    overlay: false,
  },
  mutations: {
    // Mutación del usuario
    SET_CURRENT_USER(state, user) { state.currentUser= user },
    // Mutaciones overlay
    SET_LOADING(state) { state.loading = true },
    UNSET_LOADING(state) { state.loading = false },
  },
  actions: {
    // Usser
    setCurrentUser({commit}, user) { commit('SET_CURRENT_USER', user) },
  },
  modules: {
  }
})
