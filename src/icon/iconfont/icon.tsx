import { defineComponent } from 'vue';
import { prefix } from '../../config';
import CLASSNAMES from '../../utils/classnames';
import props from '../iconfont-props';
import { ClassName, Styles } from '../../common';

const name = `${prefix}-icon`;

export default defineComponent({
  name,

  props: { ...props },

  emits: ['click'],

  data() {
    return {
      innerUrl: 'https://tdesign.gtimg.com/icon/web/index.css',
    };
  },

  computed: {
    classes(): ClassName {
      const iconName = this.url ? this.name : `${name}-${this.name}`;
      const arr = [name, iconName, CLASSNAMES.SIZE[this.size]];
      return arr;
    },
    iconStyle(): Styles {
      if (['small', 'medium', 'large'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
    _urls(): string[] {
      let url: Array<string> = [];
      if (this.url) {
        url = this.url instanceof Array ? this.url.concat() : [this.url];
      }
      if (this.loadDefaultIcons) {
        url.push(this.innerUrl);
      }
      return [...new Set(url)];
    },
  },

  mounted() {
    this._urls.forEach((url) => {
      this.addIconStylesheet(url);
    });
  },

  methods: {
    // eslint-disable-next-line no-undef
    urlExist(doms: NodeListOf<Element>, url: string) {
      return !![...doms].filter((dom) => dom.getAttribute('href') === url).length;
    },
    addIconStylesheet(url: string) {
      if (!document || !url || typeof url !== 'string') return;
      const className = 't-iconfont-stylesheet--unique-class';
      // if icon stylesheet exists, it won't be appended again.
      const doms = document.querySelectorAll(`.${className}`);
      if (this.urlExist(doms, url)) return;
      const link = document.createElement('link');
      link.setAttribute('class', className);
      link.setAttribute('href', String(url));
      link.setAttribute('rel', 'stylesheet');
      document.head.appendChild(link);
    },
    handleClick(e: MouseEvent) {
      this.$emit('click', { e });
    },
  },

  render() {
    const COMPONENT = this.tag;
    return <COMPONENT class={this.classes} style={this.iconStyle} onClick={this.handleClick}></COMPONENT>;
  },
});
