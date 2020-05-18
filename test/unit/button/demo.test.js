import { mount } from '@vue/test-utils';

describe('Button', () => {
  it('base demo works fine', () => {
    const demo = require('@/src/button/demos/base.vue');
    const wrapper = mount(demo);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('block demo works fine', () => {
    const demo = require('@/src/button/demos/block.vue');
    const wrapper = mount(demo);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('icon demo works fine', () => {
    const demo = require('@/src/button/demos/icon.vue');
    const wrapper = mount(demo);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('loading demo works fine', () => {
    const demo = require('@/src/button/demos/loading.vue');
    const wrapper = mount(demo);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('render-icon demo works fine', () => {
    const demo = require('@/src/button/demos/render-icon.vue').default;
    const wrapper = mount(demo);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('size demo works fine', () => {
    const demo = require('@/src/button/demos/size.vue');
    const wrapper = mount(demo);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('status demo works fine', () => {
    const demo = require('@/src/button/demos/status.vue');
    const wrapper = mount(demo);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('theme demo works fine', () => {
    const demo = require('@/src/button/demos/theme.vue');
    const wrapper = mount(demo);
    expect(wrapper.element).toMatchSnapshot();
  });
});
