import { createTest, destroyVM } from '../util'
import hello from 'packages/hello'

describe('hello', () => {
  let vm

  afterEach(() => {
    destroyVM(vm)
  })

  it('create', () => {
    vm = createTest(hello, {
      text: 'hello world'
    }, true)
    let dom = vm.$el
    expect(dom.innerText).to.equal('hello world')
    expect(dom.classList.contains('z-hello')).to.be.true
  })
})
