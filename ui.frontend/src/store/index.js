import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import * as managerLogin from './loginManager'

Vue.use(Vuex)

const loginManager = {
  namespaced: true,
  ...managerLogin
}

export default new Store({
  modules: {
    loginManager
  }
})
