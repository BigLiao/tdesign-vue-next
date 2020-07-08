import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-close_fill`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8,1.5 C11.5898509,1.5 14.5,4.41014913 14.5,8 C14.5,11.5898509 11.5898509,14.5 8,14.5 C4.41014913,14.5 1.5,11.5898509 1.5,8 C1.5,4.41014913 4.41014913,1.5 8,1.5 Z M10.1213203,5.17157288 L7.99957288,7.29257288 L5.87867966,5.17157288 L5.17157288,5.87867966 L7.29257288,7.99957288 L5.17157288,10.1213203 L5.87867966,10.8284271 L7.99957288,8.70657288 L10.1213203,10.8284271 L10.8284271,10.1213203 L8.70657288,7.99957288 L10.8284271,5.87867966 L10.1213203,5.17157288 Z"/></svg>;
  },

});
