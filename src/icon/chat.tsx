import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-chat`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13,3 C13.5128358,3 13.9355072,3.38604019 13.9932723,3.88337887 L14,4 L14,11.0457764 C14,11.5586122 13.6032957,11.9401902 13.105957,11.9979553 L13,11.9979553 L5.0065155,11.9979553 C4.90259795,11.9979553 4.15848974,12.5064466 2.77419085,13.523429 C2.69272325,13.5768539 2.5974227,13.605315 2.5,13.605315 C2.25454011,13.605315 2.05039163,13.4284398 2.00805567,13.1951906 L2,13.105315 L2,4 C2,3.48716416 2.38604019,3.06449284 2.88337887,3.00672773 L3,3 L13,3 Z M13,4 L3,4 L3,12.179 L5.01138306,11.0457764 L13,11.0457764 L13,4 Z"/></svg>;
  },

});
