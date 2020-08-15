import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-search`;

export default Vue.extend({
  name,

  props: {
    // xs/small/middle/large/xl/18px/2em
    size: {
      type: String,
    },
  },

  computed: {
    classes(): Array<string|object> {
      return [
        `${prefix}-icon`,
        name,
        CLASSNAMES.SIZE[this.size],
      ];
    },
    iconStyle(): object {
      if (['xs', 'small', 'middle', 'large', 'xl'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.5,2 C8.98528137,2 11,4.01471863 11,6.5 C11,7.74264069 10.4963203,8.86764069 9.68198052,9.68198052 L13.4142136,13.4142136 L12.7071068,14.1213203 L8.89583962,10.3098884 C8.20209378,10.747067 7.38058473,11 6.5,11 C4.01471863,11 2,8.98528137 2,6.5 C2,4.01471863 4.01471863,2 6.5,2 Z M6.5,3 C4.56700338,3 3,4.56700338 3,6.5 C3,8.43299662 4.56700338,10 6.5,10 C8.43299662,10 10,8.43299662 10,6.5 C10,4.56700338 8.43299662,3 6.5,3 Z"/></svg>;
  },

});
