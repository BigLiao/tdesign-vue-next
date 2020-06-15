import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-success-2`;

export default Vue.extend({
  name,

  props: {
    // xs/small/middle/large/xl/18px
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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#000" fill-rule="nonzero" d="M6.00012809 9.33333333L3.31495134 6.66530687 1.33333333 8.66666667 5.77777778 13.3333333 14.6666667 4.66666667 12.7619048 2.66666667z"/><path d="M0 0H16V16H0z"/></g></svg>;
  },

});
