import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-cart`;

export default Vue.extend({
  name,

  props: {
    // xs/small/medium/large/xl/18px/2em
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
      if (['xs', 'small', 'medium', 'large', 'xl'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M832 128C867.3462208 128 896 156.653776 896 192L896 832C896 867.3462208 867.3462208 896 832 896L192 896C156.653776 896 128 867.3462208 128 832L128 192C128 156.653776 156.653776 128 192 128L832 128ZM832 192L767.936 192 767.6867008 204.77698176C761.2371008 335.9932352 655.9932352 441.23709952 524.77698176 447.68670016L512 448C370.615104 448 256 333.384896 256 192L255.936 192 192 192 192 832 832 832 832 192ZM703.936 192L319.936 192 320.32593216 203.28145856C325.94941568 300.33624576 403.66375424 378.05058432 500.71854144 383.67406784L512 384C618.038672 384 704 298.038672 704 192L703.936 192Z"/></svg>;
  },

});