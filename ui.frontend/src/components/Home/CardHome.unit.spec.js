import { mount } from '@vue/test-utils'
import CardHome from '~/components/home/CardHome.vue'

describe('CardHome - unit', () => {
  const mountCardHome = () => {
    const wrapper = mount(CardHome)

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountCardHome()
    expect(wrapper.vm).toBeTruthy()
  })
})
