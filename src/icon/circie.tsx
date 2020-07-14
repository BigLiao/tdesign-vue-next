import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-circie`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8,1.5 C11.5898509,1.5 14.5,4.41014913 14.5,8 C14.5,11.5898509 11.5898509,14.5 8,14.5 C4.41014913,14.5 1.5,11.5898509 1.5,8 C1.5,4.41014913 4.41014913,1.5 8,1.5 Z M8,2.5 C4.96243388,2.5 2.5,4.96243388 2.5,8 C2.5,11.0375661 4.96243388,13.5 8,13.5 C11.0375661,13.5 13.5,11.0375661 13.5,8 C13.5,4.96243388 11.0375661,2.5 8,2.5 Z M8.5,4.5 L8.499,7.5 L11.5,7.5 L11.5,8.5 L8.499,8.5 L8.5,11.5 L7.5,11.5 L7.499,8.5 L4.5,8.5 L4.5,7.5 L7.499,7.5 L7.5,4.5 L8.5,4.5 Z"/></svg>;
  },

});
