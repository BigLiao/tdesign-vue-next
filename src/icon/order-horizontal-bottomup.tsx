import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-order-horizontal-bottomup`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.5,11.5 L7.5,12.5 L1.5,12.5 L1.5,11.5 L7.5,11.5 Z M11.5,7.5 L11.5,8.5 L1.5,8.5 L1.5,7.5 L11.5,7.5 Z M15.5,3.5 L15.5,4.5 L1.5,4.5 L1.5,3.5 L15.5,3.5 Z" transform="matrix(0 -1 -1 0 16.5 16.5)"/></svg>;
  },

});
