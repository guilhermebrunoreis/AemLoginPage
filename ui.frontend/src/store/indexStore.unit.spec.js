import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import store from './index'
import loginManager from './loginManager.js'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('indexStore - unit', () => {

  it('should return the store loginManager', () => {
    expect(store.loginManager).toEqual(loginManager)
  })
})
