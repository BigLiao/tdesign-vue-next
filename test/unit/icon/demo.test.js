import { mount } from '@vue/test-utils';

// unit test for component in examples.
describe('Icon', () => {
  it('base demo works fine', () => {
    const demo = require('@/examples/icon/demos/base.vue');
    const wrapper = mount(demo);
    expect(wrapper.element).toMatchSnapshot();
  });
});
