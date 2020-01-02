import { shallowMount } from '@vue/test-utils'
import ToastComponent from '@/components/ToastComponent.vue'
import Vue from 'vue'

describe('ToastComponent.vue', () => {
  it('shows information', () => {
    const wrapper = shallowMount(ToastComponent, { propsData: { value: [{ message: 'message', title: 'title', type: 'info' }] } })
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.find('.card-header strong').text()).toBe('title')
    expect(wrapper.find('.card-text').text()).toBe('message')
    expect(wrapper.find('.card').classes()).toContain('bg-info')
  })

  it('can hide after some set time', (done) => {
    const wrapper = shallowMount(ToastComponent, { propsData: { value: [{ message: 'message', title: 'title', type: 'info', timeout: 10 }] } })
    expect(wrapper.emitted()).toEqual({})
    setTimeout(() => {
      expect(wrapper.emitted().input).toEqual([[[]]])
      done()
    }, 15)
  })

  it('listens to property changes', () => {
    const wrapper = shallowMount(ToastComponent, { propsData: { value: [{ message: 'message', title: 'title' }] } })
    expect(wrapper.find('.card-text').text()).toBe('message')
    wrapper.setProps({ value: [{ message: 'changed', title: 'title', type: 'info' }] })
    expect(wrapper.find('.card-text').text()).toBe('changed')
  })
})
