import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nav: 'main'
  },
  getters: {
    getNavType: (state)=>{
      return state.nav
    }
  },
  actions: {
    changeNav: ({ commit }, navType)=>{
      /**
       * Nav Type can be either of "main" or "admin"
       */
      if(navType){
        commit('changeNavType', navType)
      }
    }

  },
  mutations: {
    changeNavType: (state, data)=>{
      state.nav = data
    }
  },
  modules: {
  }
})
