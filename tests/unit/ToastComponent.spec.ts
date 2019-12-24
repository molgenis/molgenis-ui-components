import { shallowMount } from '@vue/test-utils'
import ToastComponent from '@/components/ToastComponent.vue'

describe('ToastComponent.vue', () => {
  it('shows information', () => {
    const wrapper = shallowMount(ToastComponent, { propsData: { value: [{ message: 'message', title: 'title', type: 'info' }] } })
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.find('.card-header strong').text()).toBe('title')
    expect(wrapper.find('.card-text').text()).toBe('message')
    expect(wrapper.find('.card').classes()).toContain('bg-info')
  })
})

describe('ToastComponent.vue', () => {
  it('can hide after some set time', (done) => {
    const wrapper = shallowMount(ToastComponent, { propsData: { value: [{ message: 'message', title: 'title', type: 'info', timeout: 10 }] } })
    expect(wrapper.emitted()).toEqual({})
    setTimeout(() => {
      expect(wrapper.emitted().input).toEqual([[[]]])
      done()
    }, 15)
  })
})
