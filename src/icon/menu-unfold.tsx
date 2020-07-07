import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-menu-unfold`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14,12 L14,13 L2,13 L2,12 L14,12 Z M13.4,4.95369644 C13.7313708,4.95369644 14,5.22232559 14,5.55369644 L14,5.55369644 L14,9.4539533 C14,9.57452073 13.9636767,9.69229155 13.895765,9.79191341 C13.7091148,10.0657169 13.3358434,10.1363685 13.0620399,9.94971833 L13.0620399,9.94971833 L10.3225401,8.08221741 C10.2501981,8.03290228 10.1877495,7.97045367 10.1384343,7.89811166 C9.92067575,7.57867428 10.0031027,7.14319092 10.3225401,6.92543233 L10.3225401,6.92543233 L13.0620399,5.05793141 C13.1616617,4.99001978 13.2794326,4.95369644 13.4,4.95369644 Z M12.999,6.311 L11.249,7.503 L12.999,8.696 L12.999,6.311 Z M9,7 L9,8 L2,8 L2,7 L9,7 Z M14,2 L14,3 L2,3 L2,2 L14,2 Z"/></svg>;
  },

});
