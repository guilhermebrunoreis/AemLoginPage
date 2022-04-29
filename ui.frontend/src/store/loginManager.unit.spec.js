import { createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import { actions, mutations, state } from './loginManager.js'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('loginManager - unit', () => {
  let store, userLogin

  beforeEach(() => {
    store = new Store({
      state,
      mutations,
      actions,
    })
  })

  it('should return the state login', () => {
    store.commit('setLogin', userLogin)
    expect(store.state.userLogin).toEqual(userLogin)
  })
})
