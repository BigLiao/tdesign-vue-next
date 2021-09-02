import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-fullsreen-exit`;

export default defineComponent({
  name,

  props: {
    // small/medium/large/xl/18px/2em
    size: {
      type: String,
      default: undefined,
    },
  },

  emits: ['click'],

  computed: {
    classes(): ClassName {
      return [
        `${prefix}-icon`,
        name,
        CLASSNAMES.SIZE[this.size],
      ];
    },
    iconStyle(): Record<string, any> {
      if (['small', 'medium', 'large'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  methods: {
    handleClick(e: MouseEvent) {
      this.$emit('click', { e });
    },
  },

  render() {
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M543.94563904 512.00004608L543.99996032 512.0502592 771.84 512.4081056 771.84 576.4081056 620.93412864 576.1508224 845.3154624 800.4714688 800.0606272 845.726304 576.31286208 622.03922432 576.88802688 772.48 512.88802688 772.48 512.05099776 545.1060064 512.00003968 543.94981952 512.58436992 537.8862688C514.4861568 528.071792 520.87896448 519.86254976 529.53543296 515.47891648L529.53543296 515.47891648 533.78314048 513.67384768 538.20829184 512.52252608 538.29201088 512.54454656 538.32234816 512.50403776 543.89127744 512.0001856 543.94563904 512.00004608ZM163.39496448 118.42171072L384.3701888 339.37067776 383.77563328 187.82439488 447.77563328 187.82439488 448.5545664 416.30458112 448.06000576 422.03876416C445.40807232 436.92502912 432.40407808 448.25085632 416.554752 448.30439488L416.554752 448.30439488 416.10753728 448.22226304 188.69321024 447.88600448 188.69321024 383.88600448 338.617552 384.1277088 118.14012992 163.67654464 163.39496448 118.42171072Z"/></svg>;
  },

});
