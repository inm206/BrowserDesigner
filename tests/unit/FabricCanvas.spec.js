import { shallowMount } from '@vue/test-utils'
import FabricCanvas from '@/components/FabricCanvas.vue'


describe('FabricCanvas.vue Test', () => {
  it('calling addSquare function increments intSquareCount variable', () => {
    // render the component
    const wrapper = shallowMount(FabricCanvas, {})

    // check the name of the component
    expect(wrapper.vm.$options.name).toMatch('FabricCanvas')

    // check the addSquare function updates variable
    wrapper.vm.addSquare()
    expect(wrapper.vm.intSquareCount).toEqual(1)
  })
  it('calling addCircle function increments intCircleCount variable', () => {
    // render the component
    const wrapper = shallowMount(FabricCanvas, {})

    // check the addCircle function updates variable
    wrapper.vm.addCircle()
    expect(wrapper.vm.intCircleCount).toEqual(1)
  })
})