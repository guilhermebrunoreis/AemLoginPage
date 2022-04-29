import { mount } from '@vue/test-utils'
import BannerFigureLogin from '~/components/login/BannerFigureLogin.vue'

describe('BannerFigureLogin - unit', () => {
  const mountBannerFigureLogin = () => {
    const wrapper = mount(BannerFigureLogin)

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountBannerFigureLogin()
    expect(wrapper.vm).toBeTruthy()
  })
})
