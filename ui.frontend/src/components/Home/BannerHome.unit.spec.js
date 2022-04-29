import { mount } from '@vue/test-utils'
import BannerHome from '~/components/home/BannerHome.vue'

describe('BannerHome - unit', () => {
  const mountBannerHome = () => {
    const wrapper = mount(BannerHome)

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountBannerHome()
    expect(wrapper.vm).toBeTruthy()
  })
})
