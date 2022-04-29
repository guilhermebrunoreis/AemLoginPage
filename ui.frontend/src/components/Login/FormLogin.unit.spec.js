import { mount, createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import FormLogin from '@/components/login/FormLogin.vue'
import * as managerLogin from '@/store/loginManager'

const localVue = createLocalVue()
localVue.use(Vuex)

global.window = Object.create(window)
const url = 'http://example.com/login'
Object.defineProperty(window, 'location', {
  value: {
    href: url,
  },
})

const $route = {
  path: '/content/vue/login.html',
}
const componentProperties = {
  isInEditor: false,
}

describe('FormLogin - unit', () => {
  let store, loginManager

  beforeEach(() => {
    loginManager = {
      namespaced: true,
      ...managerLogin,
    }

    store = new Store({
      modules: {
        loginManager,
      },
    })
  })

  const mountFormLogin = () => {
    const wrapper = mount(FormLogin, {
      store,
      localVue,
      mocks: {
        $route,
      },
      attrs: {
        componentProperties,
      },
    })

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountFormLogin()
    expect(wrapper.vm).toBeTruthy()
    expect(window.location.href).toEqual(url)
  })

})
