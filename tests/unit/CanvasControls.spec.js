import { shallowMount } from '@vue/test-utils'
import CanvasControls from '@/components/CanvasControls.vue'


describe('CanvasControls.vue Test', () => {
  it('emits addSquare event when Add square button is clicked', () => {
    // render the component
    const wrapper = shallowMount(CanvasControls, {})

    // check the name of the component
    expect(wrapper.vm.$options.name).toMatch('CanvasControls')

    // trigger an event when the 'addSquare' button is clicked
    wrapper.find('.addSquare-button').trigger('click')

    // check that 1 occurrence of the event has been emitted
    expect(wrapper.emitted('addSquare')).toBeTruthy()
    expect(wrapper.emitted('addSquare').length).toBe(1)
  })
  it('emits addCircle event when Add circle button is clicked', () => {
    // render the component
    const wrapper = shallowMount(CanvasControls, {})

    // trigger an event when the 'addCircle' button is clicked
    wrapper.find('.addCircle-button').trigger('click')

    // check that 1 occurrence of the event has been emitted
    expect(wrapper.emitted('addCircle')).toBeTruthy()
    expect(wrapper.emitted('addCircle').length).toBe(1)
  })
  it('emits remove event when Remove button is clicked', () => {
    // render the component
    const wrapper = shallowMount(CanvasControls, {})

    // trigger an event when the 'remove' button is clicked
    wrapper.find('.remove-button').trigger('click')

    // check that 1 occurrence of the event has been emitted
    expect(wrapper.emitted('remove')).toBeTruthy()
    expect(wrapper.emitted('remove').length).toBe(1)
  })
  it('emits sendToBack event when Send to back button is clicked', () => {
    // render the component
    const wrapper = shallowMount(CanvasControls, {})

    // trigger an event when the 'sendToBack' button is clicked
    wrapper.find('.sendToBack-button').trigger('click')

    // check that 1 occurrence of the event has been emitted
    expect(wrapper.emitted('sendToBack')).toBeTruthy()
    expect(wrapper.emitted('sendToBack').length).toBe(1)
  })
  it('emits bringToFront event when Bring to front button is clicked', () => {
    // render the component
    const wrapper = shallowMount(CanvasControls, {})

    // trigger an event when the 'bringToFront' button is clicked
    wrapper.find('.bringToFront-button').trigger('click')

    // check that 1 occurrence of the event has been emitted
    expect(wrapper.emitted('bringToFront')).toBeTruthy()
    expect(wrapper.emitted('bringToFront').length).toBe(1)
  })
  it('emits undo event when Undo button is clicked', () => {
    // render the component
    const wrapper = shallowMount(CanvasControls, {})

    // trigger an event when the 'undo' button is clicked
    wrapper.find('.undo-button').trigger('click')

    // check that 1 occurrence of the event has been emitted
    expect(wrapper.emitted('undo')).toBeTruthy()
    expect(wrapper.emitted('undo').length).toBe(1)
  })
  it('emits redo event when Redo button is clicked', () => {
    // render the component
    const wrapper = shallowMount(CanvasControls, {})

    // trigger an event when the 'redo' button is clicked
    wrapper.find('.redo-button').trigger('click')

    // check that 1 occurrence of the event has been emitted
    expect(wrapper.emitted('redo')).toBeTruthy()
    expect(wrapper.emitted('redo').length).toBe(1)
  })
  it('emits export event when Export to PNG button is clicked', () => {
    // render the component
    const wrapper = shallowMount(CanvasControls, {})

    // trigger an event when the 'export' button is clicked
    wrapper.find('.export-button').trigger('click')

    // check that 1 occurrence of the event has been emitted
    expect(wrapper.emitted('export')).toBeTruthy()
    expect(wrapper.emitted('export').length).toBe(1)
  })
})