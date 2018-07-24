import Hello from 'packages/hello'
import { mount } from 'avoriaz'

describe('Hello', () => {
  let wrapper

  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create home', () => {
    wrapper = mount(Hello)
    expect(wrapper.hasClass('v-home')).to.be.true
    expect(wrapper.hasClass('v-button--default')).to.be.true
    expect(wrapper.hasClass('v-button--normal')).to.be.true
  })
})
