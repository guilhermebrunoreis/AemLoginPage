import { mount } from '@vue/test-utils'
import CardLogin from '~/components/login/CardLogin.vue'
import FormLogin from '~/components/login/FormLogin.vue'

describe('CardLogin - unit', () => {
  const mountCardLogin = () => {
    const wrapper = mount(CardLogin)

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountCardLogin()
    expect(wrapper.vm).toBeTruthy()
  })

  it('should mount the components', () => {
    const wrapper = mountCardLogin()
    expect(wrapper.findComponent(FormLogin)).toBeDefined()
  })
})
