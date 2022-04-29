import { mount } from '@vue/test-utils'
import LogoFigureLogin from '~/components/login/LogoFigureLogin.vue'

describe('LogoFigureLogin - unit', () => {
  const mountLogoFigureLogin = () => {
    const wrapper = mount(LogoFigureLogin)

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountLogoFigureLogin()
    expect(wrapper.vm).toBeTruthy()
  })
})
