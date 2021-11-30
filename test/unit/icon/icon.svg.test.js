import { mount } from '@vue/test-utils';
import Icon from '@/src/icon';

// every component needs four parts: props/events/slots/functions.
describe('Iconfont', () => {
  // test props api
  describe(':props', () => {
    it(':name', () => {
      const wrapper = mount({
        render() {
          return <Icon name="close"></Icon>;
        },
      });
      expect(wrapper.element).toMatchSnapshot();
    });
    it(':size', () => {
      const wrapper = mount({
        render() {
          return (
            <div>
              <Icon name="close" size="xs"></Icon>
              <Icon name="close" size="small"></Icon>
              <Icon name="close" size="middle"></Icon>
              <Icon name="close" size="large"></Icon>
              <Icon name="close" size="xl"></Icon>
              <Icon name="close" size="25px"></Icon>
              <Icon name="close" size="2em"></Icon>
            </div>
          );
        },
      });
      expect(wrapper.element).toMatchSnapshot();
    });
    it(':url string', () => {
      const anotherCssUrl = 'hhttps://tdesign.gtimg.com/icon/default-demo/index.js';
      const wrapper = mount({
        data() {
          return {
            url: anotherCssUrl,
          };
        },
        render() {
          return (
            <div>
              <Icon name="home" url={this.url}></Icon>
            </div>
          );
        },
      });
      expect(wrapper.element).toMatchSnapshot();
      const icon = wrapper.findComponent(Icon);
      expect(icon.vm._urls).toEqual([anotherCssUrl, 'https://tdesign.gtimg.com/icon/web/index.js']);
    });
    it(':url array', () => {
      const anotherCssUrl1 = 'a.js';
      const anotherCssUrl2 = 'b.js';
      const wrapper = mount({
        data() {
          return {
            url: [anotherCssUrl1, anotherCssUrl2],
          };
        },
        render() {
          return (
            <div>
              <Icon name="home" url={this.url}></Icon>
            </div>
          );
        },
      });
      expect(wrapper.element).toMatchSnapshot();
      const icon = wrapper.findComponent(Icon);
      expect(icon.vm._urls).toEqual([anotherCssUrl1, anotherCssUrl2, 'https://tdesign.gtimg.com/icon/web/index.js']);
    });
    it(':url array - filter repeated url', () => {
      const anotherCssUrl = 'a.js';
      const wrapper = mount({
        data() {
          return {
            url: [anotherCssUrl, anotherCssUrl],
          };
        },
        render() {
          return (
            <div>
              <Icon name="home" url={this.url}></Icon>
            </div>
          );
        },
      });
      const icon = wrapper.findComponent(Icon);
      expect(icon.vm._urls).toEqual([anotherCssUrl, 'https://tdesign.gtimg.com/icon/web/index.js']);
    });
    it(':loadDefaultIcons', () => {
      const wrapper = mount({
        render() {
          return (
            <div>
              <Icon name="new-icon" loadDefaultIcons={false}></Icon>
            </div>
          );
        },
      });
      const icon = wrapper.findComponent(Icon);
      expect(icon.vm._urls).toEqual([]);
    });
  });
});
