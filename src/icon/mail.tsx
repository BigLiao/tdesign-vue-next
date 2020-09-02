import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-mail`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M896 192C931.3462272 192 960 220.653776 960 256L960 768C960 803.3462208 931.3462272 832 896 832L128 832C92.653776 832 64 803.3462208 64 768L64 256C64 220.653776 92.653776 192 128 192L896 192ZM128 291.712L128 768 896 768 896 294.656 512.122064 514.28023616 128 291.712ZM833.728 256L194.688 256 511.872 435.712 833.728 256Z"/></svg>;
  },

});
