import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-wallet`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2,3.75 C2,3.33578644 2.44771525,3 3,3 L9,3 C9.55228475,3 10,3.33578644 10,3.75 L10,5 L13,5 C13.5522847,5 14,5.44771525 14,6 L14,13 C14,13.5522847 13.5522847,14 13,14 L3,14 C2.44771525,14 2,13.5522847 2,13 L2,3.75 Z M13,6 L3,6 L3,13 L13,13 L13,6 Z M12,7 L12,10 L11,10 L11,7 L12,7 Z M9,4 L3,4 L3,5 L3,5 L9,5 L9,4 Z"/></svg>;
  },

});
