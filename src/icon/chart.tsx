import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-chart`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12,2 C12.5522847,2 13,2.44771525 13,3 L13,12 C13,12.5522847 12.5522847,13 12,13 L3,13 C2.44771525,13 2,12.5522847 2,12 L2,3 C2,2.44771525 2.44771525,2 3,2 L12,2 Z M12,3 L3,3 L3,12 L12,12 L12,3 Z M10,7.5 L10,11 L9,11 L9,7.5 L10,7.5 Z M8,4 L8,11 L7,11 L7,4 L8,4 Z M6,6.625 L6,11 L5,11 L5,6.625 L6,6.625 Z"/></svg>;
  },

});
