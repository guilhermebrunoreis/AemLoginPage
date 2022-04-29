import { mount, createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import FooterHome from '~/components/home/FooterHome.vue'
import * as managerLogin from '@/store/loginManager'

const localVue = createLocalVue()
localVue.use(Vuex)

global.window = Object.create(window)
const url = 'http://example.com/home'
Object.defineProperty(window, 'location', {
  value: {
    href: url,
  },
})

const $route = {
  path: '/content/vue/home.html',
}

const componentProperties = {
  isInEditor: false,
}

describe('FooterHome - unit', () => {
  let store, loginManager


  afterEach(() => {
    jest.useRealTimers()
  })

  const mountFooterHome = () => {
    const wrapper = mount(FooterHome, {
      localVue,
      store,
      mocks: {
        $route,
      },
      attrs:{
        componentProperties
      }
    })

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountFooterHome()
    expect(wrapper.vm).toBeTruthy()
    expect(window.location.href).toEqual(url)
  })

  it('should count number for zero', async () => {
    jest.useFakeTimers()

    const wrapper = mountFooterHome()
    await wrapper.setData({ number: 0 })

    jest.advanceTimersByTime(1000)

    expect(wrapper.text()).toContain('0')
    expect(wrapper.text()).toContain('second')
    expect(wrapper.vm.number).toEqual(-1)
  })

  it('should click button logout', async () => {
    const wrapper = mountFooterHome()
    const button = wrapper.find('[data-testid="logout-button"]')
    await button.trigger('click')

    expect(store.state.loginManager.userLogin).toEqual({})
  })

  it('should click button navigation and pause countdown', async () => {
    const wrapper = mountFooterHome()
    const button = wrapper.find('[data-testid="nav-button"]')
    await button.trigger('click')

    expect(wrapper.vm.countdown).toEqual(false)
  })
})
