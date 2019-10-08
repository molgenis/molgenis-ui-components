import { mount } from '@vue/test-utils'
import Select from '../../src/components/mSelect.vue'

describe('mSelect.vue', () => {
  it('renders props.options when passed', () => {
    const options: any = [ {
      label: 'test',
      code: '1'
    }]
    const wrapper = mount(Select, {
      propsData: { options }
    })
    expect(wrapper.text()).toBe('Loading...')
  })
})
