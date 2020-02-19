import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navBarFlag:true,
  },
  mutations: {
    changeFoot(state,sta){
      state.navBarFlag=sta;
    }
  },
  actions: {
    changeNavs(ctx,sta){
      ctx.commit("changeFoot",sta)
    }	
  },
})
