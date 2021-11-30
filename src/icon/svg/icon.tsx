import { defineComponent } from 'vue';
import { prefix } from '../../config';
import CLASSNAMES from '../../utils/classnames';
import props from '../icon-svg-props';
import { ClassName, Styles } from '../../common';

const name = `${prefix}-icon`;

export default defineComponent({
  name,

  props: { ...props },

  emits: ['click'],

  data() {
    return {
      innerUrl: 'https://tdesign.gtimg.com/icon/web/index.js',
    };
  },

  computed: {
    iconName(): string {
      return this.url ? this.name : `${name}-${this.name}`;
    },
    classes(): ClassName {
      const arr = [name, this.iconName, CLASSNAMES.SIZE[this.size]];
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
      this.addIconSvg(url);
    });
  },

  methods: {
    // eslint-disable-next-line no-undef
    urlExist(doms: NodeListOf<Element>, url: string) {
      return !![...doms].filter((dom) => dom.getAttribute('src') === url).length;
    },
    addIconSvg(url: string) {
      if (!document || !url || typeof url !== 'string') return;
      const className = 't-icon-svg-js--unique-class';
      // if icon(svg) js exists, won't be appended again.
      const doms = document.querySelectorAll(`.${className}`);
      if (this.urlExist(doms, url)) return;
      const SVG = document.createElement('script');
      SVG.setAttribute('class', className);
      SVG.setAttribute('src', url);
      document.body.appendChild(SVG);
    },
    handleClick(e: MouseEvent) {
      this.$emit('click', { e });
    },
  },

  render() {
    const attrs = {
      href: `#${this.iconName}`,
    };
    return (
      <svg class={this.classes} style={this.iconStyle} onClick={this.handleClick}>
        <use {...attrs} />
      </svg>
    );
  },
});
