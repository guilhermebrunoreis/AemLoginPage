import { mount } from '@vue/test-utils'
import HeaderHome from '~/components/home/HeaderHome.vue'

describe('HeaderHome - unit', () => {
  afterEach(() => {
    jest.useRealTimers()
  })

  const mountHeaderHome = () => {
    const wrapper = mount(HeaderHome)

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountHeaderHome()
    expect(wrapper.vm).toBeTruthy()
  })

  it('should watch date', () => {
    jest.useFakeTimers()
    const wrapper = mountHeaderHome()
    jest.advanceTimersByTime(1000)

    expect(wrapper.vm.date).toBeTruthy()
  });
})
