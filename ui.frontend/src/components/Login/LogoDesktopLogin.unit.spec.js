import { mount } from '@vue/test-utils'
import LogoDesktopLogin from '~/components/login/LogoDesktopLogin.vue'

describe('LogoDesktopLogin - unit', () => {
  const mountLogoDesktopLogin = () => {
    const wrapper = mount(LogoDesktopLogin)

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountLogoDesktopLogin()
    expect(wrapper.vm).toBeTruthy()
  })
})
